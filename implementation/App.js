import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import ChannelScreen from './ChannelScreen';
import SettingsScreen from './SettingsScreen';

// const firebaseConfig = {
//   apiKey: "AIzaSyAiVxnk_2-FyL5BkB72Oc6VFrL4MDCoFuM",
//   authDomain: "swen325-assignment2.firebaseapp.com",
//   databaseURL: "https://swen325-assignment2.firebaseio.com",
//   projectId: "swen325-assignment2",
//   storageBucket: "swen325-assignment2.appspot.com",
//   messagingSenderId: "273802337274"
// }

// export const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Splash: { screen: SplashScreen },
  Channel: { screen: ChannelScreen },
  Settings: { screen: SettingsScreen }, 
});

export default App;


