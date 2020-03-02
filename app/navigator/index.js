import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../pages/launch-screen/LaunchScreen';
import ExampleNav from '../pages/componsnts-example/navigation';

const AppNavigator = createStackNavigator({
  ...ExampleNav,
}, {
  initialRouteName: 'ExampleHome',
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    LaunchScreen,
    App: AppNavigator,
  }, {
    initialRouteName: 'LaunchScreen',
  })
);

export default class extends Component {
  onNavigationStateChange = (prevState, newState, action) => {
    // console.log(prevState, newState, action);
  }

  render() {
    return (
      <AppContainer
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
};
