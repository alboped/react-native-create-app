import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import routeHoc from '@src/navigator/routeHoc';

@routeHoc()
class HocDemo extends React.Component {
  push = () => {
    this.props.router.push('ButtonGroupExample');
  }

  render() {
    const { count } = this.props;
    return (
      <View>
        <Text>HocDemo</Text>
        <TouchableOpacity onPress={this.push}>
          <Text>跳转</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
      </View>
    );
  }
}

export default HocDemo;
