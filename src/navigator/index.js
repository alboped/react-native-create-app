import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import exampleRoute from '../pages/example/navigation';
import createStackNavigator from './createStackNavigator';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function Navigator() {
  const ref = React.useRef(null);
  const screenOptions = {
    getNavRef: () => ref,
  };

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="Tab" screenOptions={screenOptions}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        {Object.keys(exampleRoute).map(routeName => {
          const screenComponent = exampleRoute[routeName];

          return <Stack.Screen key={routeName} name={routeName} component={screenComponent} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
