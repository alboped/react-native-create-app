import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import '@/utils/globalUtils';
import styles from './pages/launch-screen/LaunchScreen.style.js';
console.log(styles);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>头部</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <Text style={styles.text}>我就试试</Text>
          </View>
        </View>
        <View style={styles.foot}>
          <Text style={styles.text}>我就试试</Text>
        </View>
      </SafeAreaView>
    );
  }
}
