import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import messages_en from './intl/en.json';

//react-intl
import 'intl';
import 'intl/locale-data/jsonp/en'; // added for localization en
import {IntlProvider} from 'react-intl';

//redux
import store from './redux/store';
import {Provider} from 'react-redux';

//theme
//importing themes
import themesObj from './common/themes';


//main navigator
import TabNavigation from './navigation/TabNavigation';
import {ThemeProvider} from 'styled-components';

//todo add react-native-localize to select messages and locale config
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themesObj.light}>
        <IntlProvider locale={'en'} messages={messages_en}>
          <SafeAreaProvider>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </IntlProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
