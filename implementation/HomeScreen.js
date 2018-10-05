import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ListView, Image} from 'react-native';
import { firebaseApp } from './FirebaseApp';
import styles from './HomeStyles';

class HomeScreen extends React.Component {

  static navigationOptions = {
		header: null,
  };
    
  render() {
    return (        
      <View style={styles.homeContainer}>
				<Image
					source={require('./logo.png')}
					style={styles.logo}
				/>
				<View style={styles.buttonContainer}>
          <Button
            onPress={ () => {
              this.props.navigation.navigate('Login');
            } }
            title='Login'
						color="#4286f4"
            />
				</View>
				<View style={styles.buttonContainer}>
          <Button
            onPress={ () => {
              this.props.navigation.push('Register');
            } }
            title='Register'
            color="#4286f4"
          />
				</View>
      </View>
    );
  }
}
export default HomeScreen;