import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNav from './navigation/RootStack';

//redux
import store from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
