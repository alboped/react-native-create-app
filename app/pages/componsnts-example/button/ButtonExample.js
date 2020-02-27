/*
 * @Author: shi_zj
 * @Date: 2020-02-27 22:27:24
 * @LastEditTime: 2020-02-27 22:34:38
 * @LastEditors: shi_zj
 * @Description: 
 * @FilePath: /react-native-create-app/app/pages/componsnts-example/button/ButtonExample.js
 */
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
