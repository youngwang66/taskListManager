import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeScreen from "./pages/Home";
import ProfileScreen from "./pages/Profile";
import CameraScreen from "./pages/Camera";

import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have the Ionicons library installed

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="person" size={24} color={tintColor} />
        ),
      },
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: 'Camera',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="Camera" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        paddingBottom: 5, // Add padding below the titles
      },
    },
  }
);

export default createAppContainer(TabNavigator);
