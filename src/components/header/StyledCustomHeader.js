import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

export const HeaderContainer = styled.View`
  background-color: transparent;
  height: 11%;
  width: ${wp('100%')};
  padding-top: 13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledIcon = styled(Icon).attrs((props) => ({
  size: 30,
  color: 'white',
}))`
  padding-left: 3%;
  padding-right: 3%;
`;

export const TitleText = styled.Text`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 700;
`;
