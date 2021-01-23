import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNav from './navigation/RootStack';

import messages_en from './intl/en.json'

//react-intl
import 'intl';
import 'intl/locale-data/jsonp/en'; // added because there was a problem wiht Android
import {IntlProvider} from 'react-intl';
//redux
import store from './redux/store';
import {Provider} from 'react-redux';


//todo add react native localize to select messages and locale config
const App = () => {

  return (
    <Provider store={store}>
      <IntlProvider locale={'en'} messages={messages_en} >
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </SafeAreaProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
