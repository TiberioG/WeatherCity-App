import React from 'react';
import {TouchableOpacity} from 'react-native';
import {HeaderContainer, StyledIcon, TitleText} from './StyledCustomHeader';

// Attention use a arrow function in props onPress !!!
const MyHeader = (props) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={props.onPressLeft}>
        <StyledIcon name="arrowleft" />
      </TouchableOpacity>

      <TitleText>{props.title}</TitleText>

      <TouchableOpacity>
        <StyledIcon name="plussquareo" />
      </TouchableOpacity>
    </HeaderContainer>
  );
};
export default MyHeader;
