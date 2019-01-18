import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
	Login: { screen: require('./Login').default },
}, {
	initialRouteName: 'Login',
});