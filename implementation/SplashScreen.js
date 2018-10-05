import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, TouchableHighlight, Image, Alert} from 'react-native';
import { firebaseApp } from './FirebaseApp';
import styles from './SplashStyles';

class SplashPage extends React.Component {
    static navigationOptions = ({navigation}) => {

      return {
      headerTitle: 'Message App 5000',
      headerLeft: null,
      headerRight: (
        <TouchableHighlight
          onPress={() => navigation.push('CreateChannel')}>
          <View>
            <Image
              source={require('./add.png')}
              style={{width: 20, height: 20, marginRight: 20}}
            />
          </View>
        </TouchableHighlight>
      )};
      
    };  

    constructor(props) {
      super(props);
      let cs = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.state = {
        channelSource: cs,
        dialogVisible: false,
      };
      this.channelsRef = this.getRef().child('channels');
      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
      this.createChannel = this.createChannel.bind(this);
    }

    createChannel() {
      this.props.navigation.push('CreateChannel');
    }

    getRef() {
      return firebaseApp.database().ref();
    }

    componentWillMount() {
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
      });
    }
 
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
