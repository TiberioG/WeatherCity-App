import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentScreen from '../screens/Current/CurrentScreen';
import RootStack from './RootStack';
import BottomTabs from '../components/bottomTabs/BottomTabs';
import SearchScreen from '../screens/Search/SearchScreen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../screens/Home/HomeScreen';

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
  const dispatch = useDispatch();
  const favCities = useSelector((state) => state.favCities);
  useEffect(() => {
    // fetching data every time I focus on this tab
    //get current weather for each fav city
    favCities.forEach((id) => {
      dispatch({
        type: 'CUR_WHT_REQ',
        payload: id,
      });
    });
  }, []);

  //here i map for each tab in the const tab an actual Tab.Screen from REact navigation
  return (
    <Tab.Navigator tabBar={(props) => null}>
      {Object.keys(tabList).map((tabKey) => {
        return (
          <Tab.Screen
            name={tabKey} //the name is the key and should not be localized
            options={{
              icon: tabList[tabKey].icon,
            }}
            component={tabList[tabKey].screen({...props})}
            key={tabKey}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default TabNavigation;
