import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

export const createReducers = navigator => {
	const initialState = navigator.router.getStateForAction(
		navigator.router.getActionForPathAndParams('LaunchScreen')
	);

	const navReducer = (state = initialState, action) => {
		return navigator.router.getStateForAction(action, state) || state;
	};

	return combineReducers({
		nav: navReducer,
	});
};

export const routerMiddleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.router
);