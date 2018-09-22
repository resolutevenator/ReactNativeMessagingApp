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
          onChangeText={ (userEmail) => this.setState({userEmail}) }/>
        <TextInput style={styles.input} placeholder='Password'
          onChangeText={ (userPassword) => this.setState({userPassword}) }/>
        <Button
          onPress={ () => {
            this.props.navigation.push('Splash');
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