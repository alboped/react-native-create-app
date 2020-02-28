/*
 * @Author: shi_zj
 * @Date: 2020-02-24 14:31:44
 * @LastEditTime: 2020-02-29 01:04:40
 * @LastEditors: shi_zj
 * @Description: 启动页
 * @FilePath: /react-native-create-app/app/pages/launch-screen/LaunchScreen.js
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './LaunchScreen.style';

export default class LaunchScreen extends Component {
  state = {
    countDown: 1,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { countDown } = this.state;
      if (countDown <= 0) {
        this.props.navigation.navigate('App');
      } else {
        this.setState({
          countDown: countDown - 1
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>启动页</Text>
        <Text style={styles.text}>{this.state.countDown}</Text>
      </SafeAreaView>
    );
  }
}
