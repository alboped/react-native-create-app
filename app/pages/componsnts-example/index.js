/*
 * @Author: shi_zj
 * @Date: 2020-02-24 14:31:44
 * @LastEditTime: 2020-02-27 22:52:29
 * @LastEditors: shi_zj
 * @Description: 
 * @FilePath: /react-native-create-app/app/pages/componsnts-example/index.js
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class extends Component {
  static navigationOptions = {
    title: '组件示例'
  }

  exampleList = [
    {
      title: 'Button 按钮',
      icon: 'crop-landscape',
      route: 'ButtonExample',
    },
    {
      title: 'ButtonGroup 按钮组',
      icon: 'filter-none',
      route: 'ButtonGroupExample',
    },
    {
      title: 'Card 卡片',
      icon: 'credit-card',
    },
    {
      title: 'CheckBox 复选框',
      icon: 'check-box',
    },
    {
      title: 'Icon 图标',
      icon: 'apps',
    }
  ]

  renderListItem = () => {
    return this.exampleList.map((item, index) => (
      <ListItem
        key={index}
        title={item.title}
        leftIcon={{ name: item.icon }}
        bottomDivider
        chevron
        onPress={() => this.handleItemPress(item)}
      />
    ));
  }

  handleItemPress = item => {
    if (item.route) {
      this.props.navigation.push(item.route);
    }
  }

  render() {
    return (
      <View>
        {this.renderListItem()}
      </View>
    );
  }
}
