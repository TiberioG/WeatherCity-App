import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/AntDesign';

export const BottomTabContainer = styled.View`
  position: absolute;
  bottom: 2.3%; /* todo refactor using safeareaview*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  z-index: 200;
`;

export const InnerContainer = styled.View`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 90%;
  z-index: 200;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 1px 1px 7px black;
  shadow-opacity: 0.3;
  shadow-radius: 3.84px;
`;

export const StyledTabTouchable = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.View`
  background-color: #061860;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.width / 2}; /*this is to center */
  height: 2px;
  width: ${(props) => props.width};
  border-radius: 10px;
`;

export const SelectedIcon = styled(Icon).attrs((props) => ({
  size: 30,
  color: '#061860',
}))`
  padding-left: 3%;
  padding-right: 3%;
`;

export const StyledIcon = styled(Icon).attrs((props) => ({
  size: 30,
  color: 'gray',
}))`
  padding-left: 3%;
  padding-right: 3%;
`;
