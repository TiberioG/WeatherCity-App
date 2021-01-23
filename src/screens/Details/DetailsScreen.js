import React, {useEffect} from 'react';

import {Text, Button, View, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ConditionsText,
  Container,
  IconAndTemp,
  DateText,
  TopInfoContainer,
  BigTemperatureText,
  ScrollContainer,
  DayCardContainer,
} from './StyledDetailsScreen';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../components/header/CustomHeader';

import Svg, {
  Circle,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

import {FormattedDate} from 'react-intl';
import {getTempSymbol} from '../../common/utility';
import DailyCard from '../../components/dailyCard/DailyCard';

const DetailsScreen = (props) => {
  const route = useRoute(); //using route params to pass to this page the city ID
  const cityId = route.params;
  const currentWeather = useSelector((state) => state.currentWeather);
  const pageData = currentWeather[cityId]; //todo check for null
  const localDate = Date.now() + 1000 * pageData?.timezone; // beacuse API gives shift from UTC in seconds
  const settings = useSelector((state) => state.settings);

  let forecastWeather = useSelector((state) => state.forecastWeather);
  let array = forecastWeather[route.params]?.daily;

  let renderedCards = array
    ? Object.entries(array).map((day, index) => {
        return (
          <DayCardContainer>
            <DailyCard cityId={cityId} index={index} />
          </DayCardContainer>
        );
      })
    : null;

  return forecastWeather.fetching ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
    <>
      <Container>
        <CustomHeader
          title={pageData.name}
          onPressLeft={() => props.navigation.goBack()}
        />
        <TopInfoContainer>
          <DateText>
            <FormattedDate
              value={localDate}
              month="long"
              day="numeric"
              weekday="long"
            />
          </DateText>
          <ConditionsText>{pageData.weather[0].description}</ConditionsText>
        </TopInfoContainer>
        <IconAndTemp>
          <BigTemperatureText>i</BigTemperatureText>
          <BigTemperatureText>
            {Math.round(pageData.main.temp) + getTempSymbol(settings.units)}
          </BigTemperatureText>
        </IconAndTemp>
        <ScrollContainer horizontal={true}>{renderedCards}</ScrollContainer>

        <Svg height="150" width="300">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
        </Svg>
      </Container>
    </>
  );
};

export default DetailsScreen;
