import styled from 'styled-components';

export const Container = styled.View`
  background-color: transparent;
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
  color: ${(props) => props.theme.textColor};
`;

export const ConditionsText = styled.Text`
  padding-top: 5%;
  font-size: 20px;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
`;

export const IconAndTemp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const IconContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const WeatherIcon = styled.Image`
  height: 200px;
  width: 200px;
`;

export const BigTempContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HourlyScrollerContainer = styled.View`
  flex: 1;
  padding-bottom: 10%;
`;

export const BigTemperatureText = styled.Text`
  font-size: 110px;
  text-align: center;
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const DayCardContainer = styled.View`
  padding-left: 0.8%;
  padding-right: 0.8%;
`;

export const ScrollContainer = styled.ScrollView.attrs((props) => ({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
}))``;
