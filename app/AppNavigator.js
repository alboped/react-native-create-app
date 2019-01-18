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
import { combineReducers } from 'redux';
import { connect } from 'react-redux';

import AuthStack from './page/auth/navigation';
import LaunchScreen from './page/launch-screen/LaunchScreen';
import Home from './page/home/Home';

const AppStack = createStackNavigator({
	Home: { screen: Home },
}, {});

const AppNavigator = createAppContainer(createSwitchNavigator({
	LaunchScreen,
	AuthStack,
	AppStack,
}, {
	initialRouteName: 'LaunchScreen',
}));

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LaunchScreen'));

const navReducer = (state = initialState, action) => {
	return AppNavigator.router.getStateForAction(action, state) || state;
};

export const reducers = {
	nav: navReducer,
};

export const routerMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.router
);

const App = reduxifyNavigator(AppNavigator, 'root');

@connect(({ router }) => ({ router }))
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
		const { dispatch, router } = this.props;

		return <App dispatch={dispatch} state={router.nav}/>;
	}
}
