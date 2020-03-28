import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LaunchScreen from '../pages/launch-screen/LaunchScreen';
import exampleRoute from '../pages/componsnts-example/navigation';
import routeHoc from './routeHoc';
import createStackNavigator from './createStackNavigator';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExampleHome">
        {
          Object.keys(exampleRoute).map(routeName => {
            const screenComponent = routeHoc()(exampleRoute[routeName]);

            return (
              <Stack.Screen
                key={routeName}
                name={routeName}
                component={screenComponent}
              />
            );
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
