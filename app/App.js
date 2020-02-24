import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import '~/utils/globalUtils';
import LaunchScreen from './pages/launch-screen/LaunchScreen';
import Example from './pages/componsnts-example';

const AppNavigator = createStackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
  },
  Example: {
    screen: Example,
  },
}, {
		initialRouteName: 'LaunchScreen'
});

export default createAppContainer(AppNavigator);
