import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './screens/Feed';
import AddPhotos from './screens/AddPhotos';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function loginOrProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Profile" component={Profile}  />
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}

export default class Navigator extends Component {

  render() {
    return (
      <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPhoto"
          component={AddPhotos}
          options={{
            tabBarLabel: 'Add Picture',
            tabBarIcon: ({ color, size }) => (
              <Icon name="camera" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={loginOrProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
