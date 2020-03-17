import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import routerHoc from '../../navigator/routeHoc';

@routerHoc()
export default class Demo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.router.push('ButtonGroupExample')}>
          <Text>1234234234</Text>
        </TouchableOpacity>
      </View>
    );
  }
}