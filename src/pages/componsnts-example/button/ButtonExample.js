import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends Component {
  routerPage = () => {
    this.props.router.navigate('ButtonGroupExample');
  };

  render() {
    return (
      <View>
        <Button title="默认按钮" onPress={this.routerPage} />
      </View>
    );
  }
}
