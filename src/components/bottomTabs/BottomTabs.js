import React, {useState} from 'react';
import {useWindowDimensions, Animated} from 'react-native';

import {
  BottomTabContainer,
  StyledTabTouchable,
  StyledIcon,
  InnerContainer,
  SelectedIcon,
  Indicator,
} from './StyledBottomTabs';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const BottomTabs = (props) => {
  //destructuring props created by react navigation
  const {state, descriptors, navigation} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options; //this contains the info of current tab focused

  const windowWidth = useWindowDimensions().width;
  const tabWidth = (windowWidth * 0.9) / state.routes.length; //remember to check styled
  const [translateValue] = useState(new Animated.Value(0));
  const AnimatedIndicator = Animated.createAnimatedComponent(Indicator);
  //console.log(focusedOptions);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const _renderButton = (route, index) => {
    console.log(getFocusedRouteNameFromRoute(route));

    const {options} = descriptors[route.key];
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

      Animated.spring(translateValue, {
        toValue: index * tabWidth,
        velocity: 5,
        useNativeDriver: true,
      }).start();
    };

    console.log(index);
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
        {isFocused ? (
          <>
            <SelectedIcon name={options.icon} />
          </>
        ) : (
          <StyledIcon name={options.icon} />
        )}
      </StyledTabTouchable>
    );
  };

  return (
    <BottomTabContainer>
      <InnerContainer>
        <AnimatedIndicator
          style={[
            {
              transform: [{translateX: translateValue}],
            },
          ]}
          width={tabWidth * 0.5}
        />
        {state.routes.map((route, index) => _renderButton(route, index))}
      </InnerContainer>
    </BottomTabContainer>
  );
};

export default BottomTabs;
