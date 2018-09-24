import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

class RegisterScreen extends React.Component {
    static navigationOptions = {
      headerTitle: 'Register'
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
          title='Register'
          color='#841584'
        />
      </View>
      );
    }
  }

  export default RegisterScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    input: {

    }
  });