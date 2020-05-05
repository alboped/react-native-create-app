import React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import { useConnect } from '@utils/redux';
import createStackNavigator from './createStackNavigator';
import { authRoutes, launchRoutes, appRoutes } from './routeList';
import { ComponentsProvider } from '@components';

export { useFocusEffect };

const Stack = createStackNavigator();

function Navigator() {
  const ref = React.useRef(null);
  const [app] = useConnect(state => state.app);

  const screenOptions = {
    getNavRef: () => ref,
  };

  const routes = React.useMemo(() => {
    if (!app.isLaunch) {
      return launchRoutes;
    } else if (!app.isAuth) {
      return authRoutes;
    }

    return appRoutes;
  }, [app]);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator screenOptions={screenOptions}>
        {Object.keys(routes).map(routeKey => {
          const screenComponent = routes[routeKey];

          return <Stack.Screen key={routeKey} name={routeKey} component={screenComponent} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
