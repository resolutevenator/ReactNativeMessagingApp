import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class ChannelPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Message App 5000'
      };    
    render() {
      return (        
        <Text style={styles.welcome}>SWEN325 Assignment 2</Text>
      );
    }
  }

  export default ChannelPage;

  const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });