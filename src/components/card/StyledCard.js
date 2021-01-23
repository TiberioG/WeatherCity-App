import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const TouchableContainer = styled.TouchableOpacity`
  height: ${hp('15%')};
  width: ${wp('90%')};
  border-radius: 25px;
  background: cadetblue;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  padding-left: 5%;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Center = styled.View`
  background-color: blue;
  flex: 1;
`;

export const Right = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TemperatureText = styled.Text`
  margin: auto;
  font-weight: bold;
  font-size: 50px;
`;

export const CityText = styled.Text`
  padding-top: 5%;
  font-weight: bold;
  font-size: 25px;
`;

export const DateText = styled.Text`
  font-weight: normal;
  font-size: 15px;
`;

export const TimeText = styled.Text`
  padding-top: 1%;
  font-weight: 300;
  font-size: 12px;
`;
