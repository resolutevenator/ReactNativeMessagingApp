import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert, Image, Dimensions, TouchableOpacity} from 'react-native';
import { firebaseApp } from './FirebaseApp';
import styles from './LoginStyles';

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

    buttonDisabled() {
      return this.state.userEmail == '' || this.state.userPassword == '';
    }

    render() {
      return (
      <View style={styles.container}> 
        <Image
          source={require('./logo.png')}
          style={styles.logo}
        />     
        <TextInput style={styles.input} placeholder='Email'
          onChangeText={ (userEmail) => this.setState({userEmail}) }
          value={this.state.userEmail}/>
        <TextInput style={styles.input} placeholder='Password'
          onChangeText={ (userPassword) => this.setState({userPassword}) }
          value={this.state.userPassword}
          secureTextEntry={true}/>
				<View style={styles.buttonContainer}>
          <Button
            onPress={ () => {            
              firebaseApp.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
                .then(data => {
                  this.props.navigation.push('Splash', {
                    username: this.state.userEmail
                  });
                })
                .catch(error => {
                  Alert.alert(
                    'Error',
                    error.message,
                    [
                      {text: 'OK', onPress: () => console.log('ok')}, 
                    ],
                    { cancelable: true }
                  )
                });
            } }
            title='Register'
            color='#4286f4'
            disabled={this.buttonDisabled()}
            />
        </View>
      </View>
      );
    }
  }

  export default RegisterScreen;