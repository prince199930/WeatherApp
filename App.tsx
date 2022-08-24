import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherDetail from './src/Screens/WeatherDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native';
import HomePage from './src/Screens/HomePage';
const color = {
  white: '#FFFFFF',
  gray: '#7C7C7C',
  black: '#000000',
}
const Tab = createBottomTabNavigator()
const App = () => {

  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "WeatherDetail") {
              iconName = 'home-city-outline'
            } else if (route.name === "Search") {
              iconName = "city"
            }
            return <MaterialCommunityIcons name={iconName} size={25} color={color} />
          }
        })}

      >
        <Tab.Screen name="WeatherDetail" component={WeatherDetail}
          initialParams={{ city: "Delhi" }}
        />
        <Tab.Screen name="Search" component={HomePage} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};


export default App;
