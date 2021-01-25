import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentScreen from '../screens/Current/CurrentScreen';
import RootStack from './RootStack';
import BottomTabs from '../components/bottomTabs/BottomTabs';
import SearchScreen from '../screens/Search/SearchScreen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../screens/Home/HomeScreen';
import BackgroundCustom from '../components/background/Background';

const Tab = createBottomTabNavigator();

const tabList = {
  Home: {
    screen: RootStack,
    icon: 'home',
    headerRight: null,
  },
  Search: {
    screen: SearchScreen,
    icon: 'search1',
  },
  Local: {
    screen: CurrentScreen,
    icon: 'enviromento',
  },
};

const TabNavigation = () => {

  //here i map for each tab in the const tab an actual Tab.Screen from REact navigation
  return (
    <>
      <Tab.Navigator tabBar={(props) => <BottomTabs {...props} />}>
        {Object.keys(tabList).map((tabKey) => {
          return (
            <Tab.Screen
              name={tabKey} //the name is the key and should not be localized
              options={{
                icon: tabList[tabKey].icon,
              }}
              component={tabList[tabKey].screen}
              key={tabKey}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};
export default TabNavigation;
