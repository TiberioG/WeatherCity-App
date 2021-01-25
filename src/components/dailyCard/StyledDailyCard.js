import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const CardContainer = styled.View`
  height: ${hp('25%')};
  width: ${wp('35%')};
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 7px 1px 13px  black;
  shadow-opacity: 0.3;
  shadow-radius: 3.84px;
`;

export const DayText = styled.Text`
  color: white;
  padding-top: 15%;
 
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;

export const TempText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  padding-top: 5%;
`;

export const IconContainer = styled.View`
flex: 1;
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`;



export const WeatherIcon = styled.Image`

  height: 100%;
  width: 100%;
`;
