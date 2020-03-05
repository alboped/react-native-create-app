import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends Component {
  static navigationOptions = {
    title: '按钮'
  }

  render() {
    return (
      <View>
        <Button title="默认按钮"/>
      </View>
    );
  }
}
