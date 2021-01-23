import styled from 'styled-components';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const BottomTabContainer = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 35px;
  padding-top: 5%;
  height: ${(props) => props.theme.bottomTabBarPerc};
`;


export const StyledTabTouchable = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Round = styled.View`
  background-color: ${(props) => props.theme.accentColor};
  height: ${wp('15%')}; /*dont'use height, must be same as width} */
  width: ${wp('15%')}; 
  border-radius: ${wp('50%')}; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon).attrs((props)=> ({
    size : props.theme.bottomIconSize
}))`
  color: ${(props) => props.theme.bottomIconColor};
`;
