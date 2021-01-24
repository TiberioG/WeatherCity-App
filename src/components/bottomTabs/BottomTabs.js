import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {
  BottomTabContainer,
  StyledTabTouchable,
  Round,
  StyledIcon,
} from './StyledBottomTabs';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const BottomTabs = (props) => {

  const _renderButton = (route, index) => {

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
        onPress={onPress}
        onLongPress={onLongPress}>
        <StyledIcon  name={options.icon} />
      </StyledTabTouchable>
    );
  };

  return (
    <BottomTabContainer>

    </BottomTabContainer>
  );
};

export default BottomTabs;
