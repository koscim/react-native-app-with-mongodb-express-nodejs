import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello, Pod App!</Text>
        <Button
        onPress={() => navigate('Chat', { user: 'ALEX' })}
        title='Chat with Timon'
        />
      </View>
    )
  }
}
