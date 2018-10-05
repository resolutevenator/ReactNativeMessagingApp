import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { firebaseApp } from './FirebaseApp';
import styles from './LoginStyles';

class CreateChannelScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Message App 5000'
      }; 
      
      constructor(props) {
        super(props);
        this.state = {
          channelName: '',
        }
      }

      buttonDisabled() {
        return this.state.channelName == '';
      }

    render() {
      return (        
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder='Enter Channel Name'
            onChangeText={ (channelName) => this.setState({channelName}) }
            value={this.state.userEmail} />
          <View style={styles.buttonContainer}>
            <Button title='Create Channel' color='#4286f4'
              onPress={() => {
                firebaseApp.database().ref().child('channels/').push({
                  title: this.state.channelName
                });
                this.props.navigation.pop();
              } } 
              disabled={this.buttonDisabled()}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Cancel' color='red'
              onPress={() => {
                this.props.navigation.pop();
              } }/>
          </View>
        </View>
      );
    }
  }

  export default CreateChannelScreen;