import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native';
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
  WeatherIcon,
  BigTempContainer, IconContainer,
} from "./StyledDetailsScreen";
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../components/header/CustomHeader';

import {FormattedDate} from 'react-intl';
import {getTempSymbol} from '../../common/utility';
import DailyCard from '../../components/dailyCard/DailyCard';
import Background from '../../components/background/Background';
import BackgroundCustom from '../../components/background/Background';
import {ContainerLoading} from '../Home/StyledHomeScreen';

const DetailsScreen = (props) => {
  const route = useRoute(); //using route params to pass to this page the city ID
  const cityId = route.params.id;
  //redux selectors
  const currentWeather = useSelector((state) => state.currentWeather);
  const forecastWeather = useSelector((state) => state.forecastWeather);
  const settings = useSelector((state) => state.settings);

  const pageData = currentWeather[cityId]; //check for null
  const dailyData = forecastWeather[cityId]?.daily;

  let renderedCards = dailyData
    ? Object.entries(dailyData).map((day, index) => {
        return (
          <DayCardContainer key={index}>
            <DailyCard cityId={cityId} index={index} />
          </DayCardContainer>
        );
      })
    : null;

  return pageData.fetching ? (
    <ContainerLoading>
      <BackgroundCustom id={route.params.backgroundId} />
      <ActivityIndicator />
    </ContainerLoading>
  ) : (
    <>
      <Container>
        <BackgroundCustom id={route.params.backgroundId} night={RegExp("n").test(pageData?.weather[0].icon)} />
        <CustomHeader
          title={pageData.name}
          onPressLeft={() => props.navigation.goBack()}
        />
        <TopInfoContainer>
          <DateText>
            <FormattedDate
              value={Date.now() + 1000 * pageData?.timezone}
              month="long"
              day="numeric"
              weekday="long"
            />
          </DateText>
          <ConditionsText>{pageData?.weather[0].description}</ConditionsText>
        </TopInfoContainer>

        <IconAndTemp>
          {pageData?.weather[0].icon ? (
            <IconContainer>
              <WeatherIcon
                source={{
                  uri:
                    'http://openweathermap.org/img/wn/' +
                    pageData?.weather[0].icon +
                    '@2x.png',
                }}
              />
            </IconContainer>
          ) : (
            <ActivityIndicator />
          )}
          <BigTempContainer>
            <BigTemperatureText>
              {Math.round(pageData.main.temp) + getTempSymbol(settings.units)}
            </BigTemperatureText>
          </BigTempContainer>
        </IconAndTemp>
        <ScrollContainer horizontal={true}>{renderedCards}</ScrollContainer>
      </Container>
    </>
  );
};

export default DetailsScreen;
