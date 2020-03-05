import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaunchScreen from '../pages/launch-screen/LaunchScreen';
import ExampleNav from '../pages/componsnts-example/navigation';

import Example from '../pages/componsnts-example';
import ButtonExample from '../pages/componsnts-example/button/ButtonExample';
import ButtonGroupExample from '../pages/componsnts-example/button-group/ButtonGroupExample';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Example">
        <Stack.Screen name="Example" component={Example} options={{ title: '示例' }} />
        <Stack.Screen name="ButtonExample" component={ButtonExample} options={{ title: 'Button 按钮' }} />
        <Stack.Screen name="ButtonGroupExample" component={ButtonGroupExample} options={{ title: '按钮组' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}