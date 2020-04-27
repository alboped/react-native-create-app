import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './LaunchScreen.style';

export default class LaunchScreen extends Component {
  state = {
    countDown: 1,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { countDown } = this.state;
      if (countDown <= 0) {
        // this.props.navigation.navigate('App');
      } else {
        this.setState({
          countDown: countDown - 1,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>启动页</Text>
        <Text style={styles.text}>{this.state.countDown}</Text>
      </SafeAreaView>
    );
  }
}
