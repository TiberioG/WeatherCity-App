import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const HeaderContainer = styled.View`
  background-color: red;
  padding-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 2%;
  z-index: 100; /* this must be higher than the top filter one!!*/
`;
