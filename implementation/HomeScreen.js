import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Message App 5000'
      };    
    render() {
      return (        
        <View style={styles.container}>
            <Button
                onPress={ () => {
                    this.props.navigation.navigate('Login');
                } }
                title='Login'
                color="#841584"
            />
            <Button
                onPress={ () => {
                    this.props.navigation.push('Register');
                } }
                title='Register'
                color="#841584"
            />
        </View>
      );
    }
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });