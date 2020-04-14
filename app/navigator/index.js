import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LaunchScreen from '../pages/launch-screen/LaunchScreen';
import exampleRoute from '../pages/componsnts-example/navigation';
import routeHoc from './routeHoc';
import createStackNavigator from './createStackNavigator';

const Stack = createStackNavigator();

function Navigator() {
  const ref = React.useRef(null);
  const screenOptions = {
    getNavRef: () => ref,
  }

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="ExampleHome" screenOptions={screenOptions}>
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
