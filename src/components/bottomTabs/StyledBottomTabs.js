import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/AntDesign';

export const StyledIcon = styled(Icon).attrs((props) => ({
  size: 30,
  color: 'blue',
}))`
  padding-left: 3%;
  padding-right: 3%;
`;

export const BottomTabContainer = styled.View`
  background-color: red;


  display: flex;
  flex-direction: row;
  height: 50px;
  width: 90%;
  z-index: 200;
`;

export const StyledTabTouchable = styled.TouchableOpacity`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Round = styled.View`
  height: ${wp('15%')}; /*dont'use height, must be same as width} */
  width: ${wp('15%')};
  border-radius: ${wp('50%')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
