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
} from './StyledCard';

import {useSelector} from 'react-redux';
import {FormattedDate, FormattedTime} from 'react-intl';
import {getTempSymbol} from '../../common/utility';
import {useNavigation} from '@react-navigation/native';

const Card = (props) => {
  const navigation = useNavigation();
  const currentWeather = useSelector((state) => state.currentWeather);
  const cardData = currentWeather[props.id]; //todo check for null
  const localDate = Date.now() + 1000 * cardData?.timezone; // beacuse API gives shift from UTC in seconds
  const settings = useSelector((state) => state.settings);

  //console.log(currentWeather)
  return (
    <TouchableContainer
      onPress={() => {
        navigation.navigate('Details', props.id); //here I pass index as route.params
      }}>
      <Left>
        <CityText numberOfLines={2} ellipsizeMode="tail">
          {cardData?.name}
        </CityText>
        <DateText>
          <FormattedDate
            value={localDate}
            month="long"
            day="numeric"
            weekday="long"
          />
        </DateText>
        <TimeText>
          <FormattedTime value={localDate} />
        </TimeText>
      </Left>

      <Center></Center>

      <Right>
        <TemperatureText>
          {Math.round(currentWeather[props.id]?.main.temp) +
            getTempSymbol(settings.units)}
        </TemperatureText>
      </Right>
    </TouchableContainer>
  );
};

export default Card;
