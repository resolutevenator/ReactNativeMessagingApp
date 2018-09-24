import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ListView, ScrollView} from 'react-native';
import { firebaseApp } from './FirebaseApp';

class ChannelPage extends React.Component {
  constructor(props) {
    super(props);
    let ms = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      channelName: '',
      username: '',
      message: '',
      messageSource: ms,
    }
    this.messageRef = this.getRef().child('messages/' + this.getChannelName());
    this.renderRow = this.renderRow.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  // static navigationOptions = this.props.navigation.getParam('navigationOptions', 'navigationOptions');
  // TODO: Implement header bar for channels

  componentWillMount() {
    const channelName = this.props.navigation.getParam('channelName', 'channelName');
    const username = this.props.navigation.getParam('username', 'username');
    this.setState({channelName, username});
    this.getMessages(this.messageRef);
  }

  getMessages(messageRef) {
    messageRef.on('value', (snap) => {
      let messages = [];
      snap.forEach((item) => {
        messages.push({
          message: item.val().message,
          username: item.val().username,
        });
      });
      this.setState({
        messageSource: this.state.messageSource.cloneWithRows(messages)
      });
    });
  }

  getChannelName() {
    return this.props.navigation.getParam('channelName', 'channelName');
  }

  renderRow(item) {
    if(item.username === this.state.username) {
      return (
        <View style={styles.messagesAlt}>
          <Text style={styles.usernameAlt}>{item.username}</Text>
          <Text style={styles.userMessageAlt}>{item.message}</Text>
        </View>
      );
    } else {
      return(
        <View style={styles.messages}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.userMessage}>{item.message}</Text>
        </View>
      );
    }
  }

  sendMessage() {
    if(this.state.message != ''){
      this.messageRef.push({
        username: this.state.username,
        message: this.state.message
      });
      this.setState({message: ''});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListView
              dataSource={this.state.messageSource}
              renderRow={this.renderRow}/>
        </ScrollView>
        <View>
          <TextInput
            style={styles.input} placeholder='Type Message'
            onChangeText={ (message) => this.setState({message}) }
            value={this.state.message}/>
        </View>
        <Button
          onPress={this.sendMessage}
          title='Send'
          color='#841584'/>
      </View>
    );
  }
}

export default ChannelPage;

const styles = StyleSheet.create({
  container:  {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  messages: {    
    backgroundColor: '#bfbfbf',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  messagesAlt: {    
    backgroundColor: '#00cc00',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  username: {

  },
  usernameAlt: {
    textAlign: 'right',
  },
  userMessage: {

  },
  userMessageAlt: {
    textAlign: 'right',
  }

});