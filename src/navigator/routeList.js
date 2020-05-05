import LaunchScreen from '../pages/launch-screen/LaunchScreen';
import authRoutes from '../pages/auth/navigation';
import exampleRoute from '../pages/example/navigation';

export const launchRoutes = {
  LaunchScreen,
};

export { authRoutes };

export const appRoutes = {
  Tab: require('./TabNavigator').default,
  ...exampleRoute,
};
