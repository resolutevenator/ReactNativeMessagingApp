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
            onChangeText={ (userEmail) => this.setState({userEmail}) }
            value={this.state.userEmail}/>
          <TextInput style={styles.input} placeholder='Password'
            onChangeText={ (userPassword) => this.setState({userPassword}) }
            value={this.state.userPassword}/>
          <Button
            onPress={ () => {
              this.props.navigation.push('Splash', {
                username: this.state.userEmail
              });
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