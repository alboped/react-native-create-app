import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './LaunchScreen.style';

console.log('样式===', styles);

export default class LaunchScreen extends Component {
  render() {
    console.log('1234');
    return (
      <View>
        <Text style={styles.text}>启动页面</Text>
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
      </View>
    );
  }
}
