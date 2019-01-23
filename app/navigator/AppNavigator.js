/**
 * 创建导航组件
 */
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';

import AuthStack from '../page/auth/navigation';
import LaunchScreen from '../page/launch-screen/LaunchScreen';
import Home from '../page/home/Home';

const AppStack = createStackNavigator({
	Home: { screen: Home },
}, {});

export default createAppContainer(createSwitchNavigator({
	LaunchScreen,
	AuthStack,
	AppStack,
}, {
	initialRouteName: 'LaunchScreen',
}));