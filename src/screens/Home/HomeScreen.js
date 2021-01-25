import React, {useEffect, useState} from 'react';

import {Text, ScrollView} from 'react-native';
import {
  AddCityContainer,
  AddCityText,
  AddIcon,
  CardContainer,
  Container,
  ContentContainer,
  TopContainer,
  WelcomeMessage,
} from './StyledHomeScreen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {FormattedMessage} from 'react-intl';
import Card from '../../components/card/Card';
import BottomTabs from '../../components/bottomTabs/BottomTabs';
import {getDayPart} from '../../common/utility';
import {ScrollContainer} from '../Details/StyledDetailsScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favCities = useSelector((state) => state.favCities);
  const userName = useSelector((state) => state.settings.name); //todo refactor using slice with userinfo

  const [time, setTime] = useState( Date.now())

  useEffect(() => {
    // fetching data every time I focus on this tab
    return navigation.addListener('focus', () => {
      //get current weather for each fav city
      favCities.forEach((id) => {
        dispatch({
          type: 'CUR_WHT_REQ',
          payload: id,
        });
      });
    });
  }, [navigation]);


  //effect to update time for the clock of every card
  useEffect(() => {
    setInterval(() => {
      setTime(Date.now)
    }, 1000)
  }, []);

  const renderedCards = favCities
    ? favCities
        //.sort(sortFunctions[sorter[0]])
        .map((cityId) => {
          return (
            <CardContainer key={cityId}>
              <Card key={cityId} id={cityId} time={time}/>
            </CardContainer>
          );
        })
    : null;

  return (
    <Container>
      <TopContainer>
        <WelcomeMessage>
          <FormattedMessage
            id={'home.' + getDayPart()}
            values={{
              br: `\n`,
              name: userName,
            }}
          />
        </WelcomeMessage>

        <AddCityContainer>
          <AddIcon />
          <AddCityText>
            <FormattedMessage id={'home.addCity'} />
          </AddCityText>
        </AddCityContainer>
      </TopContainer>
      <ContentContainer>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>{renderedCards}</ScrollView>
      </ContentContainer>
    </Container>
  );
};

export default HomeScreen;
