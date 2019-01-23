import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import { setTopLevelNavigator } from '../utils/navigation/';
import AppNavigator from './AppNavigator';

const App = reduxifyNavigator(AppNavigator, 'root');

export { AppNavigator };

@connect(({ router }) => ({ router }))
export default class Router extends PureComponent {
	constructor(props) {
		super(props);

		BackHandler.addEventListener('backPress', this.backHandle);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('backPress', this.backHandle);
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

		return (
			<App
				ref={setTopLevelNavigator}
				dispatch={dispatch}
				state={router.nav}
			/>
		);
	}
}
