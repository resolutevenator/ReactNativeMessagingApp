
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import ChannelScreen from './ChannelScreen';
import SettingsScreen from './SettingsScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Splash: { screen: SplashScreen },
  Channel: { screen: ChannelScreen },
  Settings: { screen: SettingsScreen }, 
});

export default App;


