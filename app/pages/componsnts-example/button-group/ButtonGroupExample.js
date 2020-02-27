/*
 * @Author: shi_zj
 * @Date: 2020-02-27 22:38:13
 * @LastEditTime: 2020-02-27 22:40:55
 * @LastEditors: shi_zj
 * @Description: 
 * @FilePath: /react-native-create-app/app/pages/componsnts-example/button-group/ButtonGroupExample.js
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class extends Component {
  static navigationOptions = {
    title: '按钮组'
  }

  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state

    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
      </View>
    )
  }
}