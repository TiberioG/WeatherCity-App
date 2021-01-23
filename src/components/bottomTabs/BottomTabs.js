import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  BottomTabContainer,
  StyledTabTouchable,
  Round,
  StyledIcon,
} from './StyledBottomTabs';
import {ThemeContext} from 'styled-components';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const BottomTabs = (props) => {
  const themeContext = useContext(ThemeContext);
  //destructuring props created by react navigation
  const {state, descriptors, navigation} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options; //this contains the info of current tab focused

  //console.log(focusedOptions);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const _renderButton = (route, index) => {
    console.log(getFocusedRouteNameFromRoute(route));

    const {options} = descriptors[route.key];
    const label = options.title; // attention, remember always to add a localized title as route option !!

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name); // remember route.name is not localized and is defined in the list of tabs as key
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <StyledTabTouchable
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Round>
          <StyledIcon size={25} icon={options.icon} />
        </Round>

        {themeContext.tabBarText ? (
          <Text
            style={{
              color: isFocused
                ? themeContext.accentColor
                : themeContext.textColor,
            }}>
            {label}
          </Text>
        ) : null}
      </StyledTabTouchable>
    );
  };

  return (
    <BottomTabContainer>
      {state.routes.map((route, index) => _renderButton(route, index))}
    </BottomTabContainer>
  );
};

export default BottomTabs;
