import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  HeaderContainer,

} from './StyledCustomHeader';

import {useDispatch} from 'react-redux';

// Attention use a arrow function in props onPress !!!
const MyHeader = (props) => {
  return (
    <HeaderContainer>
      <Text>{props.title}</Text>
    </HeaderContainer>
  );
};
export default MyHeader;
