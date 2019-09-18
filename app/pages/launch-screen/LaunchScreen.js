import React, {Components} from 'react';
import {View, Text} from 'react-native';

import styles from './LaunchScreenStyles';

console.log('样式===', styles);

export default class LaunchScreen extends Components {
  render() {
    return (
      <View>
        <Text>启动页面</Text>
      </View>
    );
  }
}
