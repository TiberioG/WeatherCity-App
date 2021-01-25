import React from 'react';
import {
  Center,
  TouchableContainer,
  Left,
  Right,
  TemperatureText,
  CityText,
  DateText,
  TimeText,
  Inner,
  WeatherIcon,
} from './StyledCard';

import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FormattedDate, FormattedTime} from 'react-intl';
import {getTempSymbol} from '../../common/utility';
import {useNavigation} from '@react-navigation/native';

import BackgroundCustom from '../background/Background';

const handler = {
  get: (target, prop) => {
    // get the value of the property
    if (target[prop] === undefined) {
      return 'error'; // return empty string instead of null/undefined
    }
    if (typeof target[prop] === 'object') {
      // if the target is also an object, proxy that too
      return new Proxy(target[prop], handler);
    }
    return target[prop]; // it's not null and not an object, return it
  },
};

const Card = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentWeather = useSelector((state) => state.currentWeather);
  const cardData = currentWeather[props.id]; //todo check for null
  const settings = useSelector((state) => state.settings);

  return cardData?.fetching || currentWeather.initial ? (
    <TouchableContainer>
      <BackgroundCustom style={{borderRadius: 25}} />
    </TouchableContainer>
  ) : (
    <TouchableContainer
      onPress={() => {
        //let's fetch data for the next page in advance
        dispatch({
          type: 'FORECAST_WHT_REQ',
          payload: props.id,
        });
        navigation.navigate('Details', {
          id: props.id,
          backgroundId: cardData?.weather[0].id,
        }); //here I pass index as route.params
      }}>
      <BackgroundCustom
        style={{borderRadius: 25}}
        id={cardData?.weather[0].id}
        night={RegExp('n').test(cardData?.weather[0].icon)}
      />

      <Inner>
        <Left>
          <CityText numberOfLines={2} ellipsizeMode="tail">
            {cardData?.name}
          </CityText>
          <DateText>
            <FormattedDate
              value={props.time + 1000 * cardData?.timezone}
              month="long"
              day="numeric"
              weekday="long"
            />
          </DateText>
          <TimeText>
            <FormattedTime value={props.time + 1000 * cardData?.timezone} />
          </TimeText>
        </Left>

        <Center>
          {cardData?.weather[0].icon ? (
            <WeatherIcon
              source={{
                uri:
                  'http://openweathermap.org/img/wn/' +
                  cardData?.weather[0].icon +
                  '@2x.png',
              }}
            />
          ) : (
            <ActivityIndicator />
          )}
        </Center>

        <Right>
          <TemperatureText>
            {Math.round(cardData?.main.temp) + getTempSymbol(settings.units)}
          </TemperatureText>
        </Right>
      </Inner>
    </TouchableContainer>
  );
};

export default Card;
