/**
 * toast 组件
 */

/**
 * Toast 信息提示；
 */
import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { View } from '../view/View';

import styles from './styles';

function Toast() {
  return (
    <View style={styles.toastView}>
      <Animatable.View ref={ref => (this.animationRef = ref)} animation="bounceIn" duration={400}>
        <Text>加载中</Text>
      </Animatable.View>
    </View>
  );
}

export default Toast;
