import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends Component {
  // static navigationOptions = {
  //   title: '按钮'
  // }

  routerPage = () => {
    // this.props.router.navigate('ButtonGroupExample');
    test = () => {
      console.log(this.props.router.isFocused());
      setTimeout(() => {
        console.log(this.props.router.isFocused());
      }, 2000);
    }
  }

  render() {
    return (
      <View>
        <Button title="默认按钮" onPress={this.routerPage}/>
      </View>
    );
  }
}
