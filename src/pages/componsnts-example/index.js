import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import HocDemo from './HocDemo';
import HookDemo from './HookDemo';

@connect(state => ({
  count: state.app.count
}))
export default class extends Component {
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
      title: 'List 列表',
      icon: 'format-list-bulleted',
      route: 'ListExample',
    },
    {
      title: 'Card 卡片',
      icon: 'credit-card',
      route: 'CardExample',
    },
    {
      title: 'CheckBox 复选框',
      icon: 'check-box',
    },
    {
      title: 'Icon 图标',
      icon: 'apps',
    },
    {
      title: 'Text 文字',
      icon: 'text-format',
      route: 'TextExample',
    },
    {
      title: 'Overlay 遮罩',
      icon: 'text-format',
      route: 'OverlayExample',
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
    const { router, count } = this.props;

    if (item.route) {
      router.push(item.route);
    }

    this.props.dispatch({
      type: 'app/updateState',
      payload: {
        count: count + 1
      }
    })
  }

  render() {
    return (
      <View>
        {this.renderListItem()}
        <Text>{this.props.count}</Text>
        <HocDemo ref={console.log}/>
        <HookDemo/>
      </View>
    );
  }
}
