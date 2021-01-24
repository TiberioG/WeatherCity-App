import React, {useEffect} from 'react';

import {Text, Button} from 'react-native';
import {CardContainer, Container, WelcomeMessage} from './StyledHomeScreen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {FormattedMessage} from 'react-intl';
import Card from '../../components/card/Card';
import BottomTabs from "../../components/bottomTabs/BottomTabs";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favCities = useSelector((state) => state.favCities);
  const userName = useSelector((state) => state.settings.name); //todo refactor using slice with userinfo
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

  const renderedCards = favCities
    ? favCities
        //.sort(sortFunctions[sorter[0]])
        .map((cityId) => {
          return (
            <CardContainer key={cityId}>
              <Card key={cityId} id={cityId} />
            </CardContainer>
          );
        })
    : null;

  return (
    <Container>
      <WelcomeMessage>
        <FormattedMessage
          id="home.welcome"
          values={{
            br: `\n`,
            name: userName,
          }}
        />
      </WelcomeMessage>
      {renderedCards}
    </Container>
  );
};

export default HomeScreen;
