import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import '@/utils/globalUtils';
import styles from './pages/launch-screen/LaunchScreenStyles.js';
console.log(styles);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>我就试试</Text>
        </View>
      </SafeAreaView>
    );
  }
}
