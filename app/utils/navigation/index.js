import { NavigationActions } from 'react-navigation';

import { checkUrl } from '../index';

let _navigator;

export const setTopLevelNavigator = navRef => {
	_navigator = navRef;
}

/**
 * 跳转页面
 * @param  {String} route 路由
 * @param  {Object} params 路由参数
 * @return {undefined}
 */
export const push = (route, params = {}) => {
	let routeName = '';
	let routeParams = {};

	if(checkUrl(route)) {
		routeName = 'WebPage';
		routeParams = { url: route };
	} else {
		routeName = route;
		routeParams = params;
	}

	_navigator.props.dispatch(NavigationActions.navigate({
		routeName,
		params: routeParams,
		action: NavigationActions.navigate({ routeName })
	}));
};

export default {
	setTopLevelNavigator,
	push,
}