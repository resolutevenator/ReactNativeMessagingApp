import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ListView, ScrollView} from 'react-native';
import { firebaseApp } from './FirebaseApp';
import styles from './ChannelStyles';

class ChannelPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('channelName', 'channel')
    };
  };
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
    this.scrollToEndOnNewMessage = this.scrollToEndOnNewMessage.bind(this);
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  componentWillMount() {
    const channelName = this.props.navigation.getParam('channelName', 'channelName');
    const username = firebaseApp.auth().currentUser.email;
    this.setState({channelName, username});
    this.getMessages(this.messageRef);
  }

  componentDidMount() {
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

  scrollToEndOnNewMessage() {
    this.scrollView.scrollToEnd({animated: false});
  }

  sendButtonDisabled() {
    return this.state.message == '';
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref={ref => this.scrollView = ref}
          onContentSizeChange={this.scrollToEndOnNewMessage}>
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
          color='#4286f4'
          disabled={this.sendButtonDisabled()}/>
      </View>
    );
  }
}

export default ChannelPage;