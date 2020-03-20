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

  routerPage = () => {
    this.props.router.navigate('ButtonExample');
  }

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state

    return (
      <View>
        <ButtonGroup
          onPress={this.routerPage}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
      </View>
    )
  }
}