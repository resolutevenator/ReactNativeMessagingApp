import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class LoginScreen extends React.Component {
    static navigationOptions = {
      headerTitle: 'Login'
    };
    constructor(props) {
      super(props);
      this.state = { 
        userEmail: '',
        userPassword: '',
     }
    }     
    render() {
      return (        
        <View style={styles.container}>      
          <TextInput style={styles.input} placeholder='Email'
            onChangeText={ (userEmail) => this.setState({userEmail}) }/>
          <TextInput style={styles.input} placeholder='Password'
            onChangeText={ (userPassword) => this.setState({userPassword}) }/>
          <Button
            onPress={ () => {
              this.props.navigation.push('Splash');
            } }
            title='Login'
            color='#841584'
          />
        </View>
      );
    }
  }

  export default LoginScreen;

  const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });