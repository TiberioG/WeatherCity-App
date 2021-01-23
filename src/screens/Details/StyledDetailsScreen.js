import styled from 'styled-components';

export const Container = styled.View`
  background-color: #2286db;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;

export const TopInfoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const DateText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

export const ConditionsText = styled.Text`
  padding-top: 5%;
  font-size: 20px;
  font-weight: 300;
  color: white;
`;

export const IconAndTemp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BigTemperatureText = styled.Text`
  flex: 1;
  font-size: 110px;
  text-align: center;
  font-weight: 900;
  color: white;
  padding-top: 8%;
  padding-bottom: 50%;
`;

export const DayCardContainer = styled.View`
  padding-left: 0.8%;
  padding-right: 0.8%;
`;

export const ScrollContainer = styled.ScrollView.attrs((props) => ({
  showsVerticallScrollIndicator : false,
  showsHorizontalScrollIndicator : false
}))`
`;
