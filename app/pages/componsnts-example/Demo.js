import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import routerHoc from '../../navigator/routeHoc';

@routerHoc()
export default class Demo extends React.Component {
  test = () => {
    console.log(this.props.router.isFocused());
    setTimeout(() => {
      console.log(this.props.router.isFocused());
    }, 2000);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity onPress={this.test}>
          <Text>1234234234</Text>
        </TouchableOpacity>
      </View>
    );
  }
}