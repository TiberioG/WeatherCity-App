import React from 'react';
import {View} from 'react-native';
import {
  CardContainer,
  DayText,
  IconContainer,
  TempText,
  WeatherIcon,
} from './StyledDailyCard';
import {TemperatureText} from '../card/StyledCard';
import {useSelector} from 'react-redux';
import {FormattedDate} from 'react-intl';
import {getTempSymbol} from '../../common/utility';

const DailyCard = (props) => {
  const forecast = useSelector((state) => state.forecastWeather);

  const settings = useSelector((state) => state.settings);
  let dailyData = forecast[props.cityId]?.daily[props.index];
  let date = new Date(dailyData?.dt * 1000);
  //console.log(currentWeather)
  return (
    <CardContainer>
      <DayText>
        <FormattedDate value={date} weekday="long" />
      </DayText>
      <TempText>
        {' '}
        {Math.round(dailyData?.temp.day) + getTempSymbol(settings.units)}
      </TempText>
      {dailyData?.weather[0].icon ? (
        <IconContainer>
          <WeatherIcon
            source={{
              uri:
                'http://openweathermap.org/img/wn/' +
                dailyData?.weather[0].icon +
                '@2x.png',
            }}
          />
        </IconContainer>
      ) : (
        <ActivityIndicator />
      )}
    </CardContainer>
  );
};

export default DailyCard;
