/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SWEN325 Assignment 2</Text>
        <Text style={styles.instructions}>Starter</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Enter Username'
        />
        <Button
          onPress={ () => {
            this.props.navigation.navigate('Profile', {
              username: this.state.text,
            });
          } }
          title='Submit'
          color="#841584"
        />
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    const text = navigation.getParam('username', 'username');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to SWEN325 Starter App</Text>
        <Text style={styles.welcome}>Your name is {JSON.stringify(text)}</Text>
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: 200
  },
});
