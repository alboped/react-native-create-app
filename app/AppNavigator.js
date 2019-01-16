import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
	NavigationActions,
} from 'react-navigation';
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import authNav from './page/auth/navigation';
import LaunchScreen from './page/launch-screen/LaunchScreen';
import Home from './page/home/Home';

const AuthStack = createStackNavigator(authNav);

const AppStack = createStackNavigator({
	Home: { screen: Home },
}, {});

const AppNavigator = createSwitchNavigator({
	LaunchScreen: { screen: LaunchScreen },
	AuthStack,
	AppStack,
}, {
	initialRouteName: 'LaunchScreen',
});

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.router
);

const App = reduxifyNavigator(AppNavigator, 'root')

@connect(({ app, router }) => ({ app, router }))
export default class Router extends PureComponent {
	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backHandle)
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
	}

	backHandle = () => {
		const currentScreen = getActiveRouteName(this.props.router)
		if (currentScreen === 'Login') {
			return true;
		}
		if (currentScreen !== 'Home') {
			this.props.dispatch(NavigationActions.back());
			return true;
		}
		return false;
	}

	render() {
		const { app, dispatch, router } = this.props;
		if (app.loading) return <Loading />

		return <App dispatch={dispatch} state={router}/>;
	}
}
