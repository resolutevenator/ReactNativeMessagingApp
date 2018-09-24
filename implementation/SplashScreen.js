import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ListView, TouchableHighlight} from 'react-native';
import { firebaseApp } from './FirebaseApp';

class SplashPage extends React.Component {
    constructor(props) {
      super(props);
      let cs = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.state = { 
        username: '',
        channelSource: cs 
      };
      this.channelsRef = this.getRef().child('channels');
      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
    }

    getRef() {
      return firebaseApp.database().ref();
    }

    componentWillMount() { 
      const username = this.props.navigation.getParam('username', 'username');
      this.setState({username});
      this.getChannels(this.channelsRef);
    }

    getChannels(channelsRef) {
      channelsRef.on('value', (snap) => {
        let channels = [];
        snap.forEach((item) => {
          channels.push({
            title: item.val().title
          });
        });
        this.setState({
          channelSource: this.state.channelSource.cloneWithRows(channels)
        });
      });
    }

    renderRow(item) {
      return(
        <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
          <View style={styles.listChannels}>
            <Text style={styles.channelName}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      );
    }

    pressRow(item) {
      console.log(item);
      this.props.navigation.navigate('Channel', {
        channelName: item.title,
        username: this.state.username,
        navigationOptions: {
          headerTitle: item.title
        }
      });
    }

    static navigationOptions = {
      headerTitle: 'Message App 5000',
      headerLeft: null
    };    
    render() {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.channelSource}
            renderRow={this.renderRow}/>
        </View>
      );
    }
  }

  export default SplashPage;

  const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    listView: {
      flex: 1
    },
    listChannels: {
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 14,
      paddingBottom: 16,
    }, 
    channelName: {
      color: '#333',
      fontSize: 16,
    },
    liContainer: {
      flex: 2
    },
  });