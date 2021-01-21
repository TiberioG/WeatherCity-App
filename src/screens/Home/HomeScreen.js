import React from 'react';

import {Text, Button} from 'react-native';
import {Container} from './StyledHomeScreen';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text> Hello home</Text>
      <Button
        title="go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
};

export default HomeScreen;
