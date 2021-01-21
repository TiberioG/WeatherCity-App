import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

//Screens
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const RootStack = createStackNavigator();
const RootStackNav = () => {
  return (
    <>
      <StatusBar
        translucent={true} // this works only on android : When translucent is set to true, the app will draw under the status bar
        barStyle={'dark-content'}
      />
      <RootStack.Navigator initialRouteName={'Home'}>
        <RootStack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNav;
