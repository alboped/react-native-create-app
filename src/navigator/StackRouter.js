import { StackRouter, StackActions, CommonActions } from '@react-navigation/native';

import interceptors from './interceptors';

/**
 * 跳转动作类型，对应的跳转方法
 */
const actionTypes = {
  'NAVIGATE': 'navigate',
  'PUSH': 'push'
};

/**
 * 导航方法
 */
const navigation = {
  push(dispatch, routeName, params) {
    dispatch(
      StackActions.push(routeName, params)
    );
  },
  navigate(dispatch, routeName, params) {
    dispatch(
      CommonActions.navigate(routeName, params)
    );
  },
  replace(dispatch, routeName, params) {
    dispatch(
      StackActions.replace(routeName, params)
    );
  },
}

/**
 * 允许跳转的参数字段名
 */
const ALLOW_NAVIGATOR_ACTION = 'ALLOW_NAVIGATOR_ACTION';

/**
 * 继续跳转页面，不会被拦截
 * @param {Object} action 页面跳转的action
 * @param {Object} navRef 导航实例
 */
const navigatorNext = (action, navRef) => {
  const { type, payload } = action;
  if (navRef?.current) {
    navigation[actionTypes[type]](
      navRef.current.dispatch,
      payload.name,
      {
        ...(payload.params || {}),
        [ALLOW_NAVIGATOR_ACTION]: true,
      }
    );
  }
}

/**
 * 自定义router
 */
const CustomStackRouter = options => {
  console.log(options);
  const router = StackRouter(options);
  const { getNavRef } = options.screenOptions;

  return {
    ...router,
    /**
     * 路由动作拦截函数
     * @param {Object} state 路由状态
     * @param {Object} action 路由动作
     * @param {Object} options 路由参数
     */
    getStateForAction(state, action, options) {
      const { payload = {}, type } = action;
      const { params = {} } = payload;

      /* 判断是否为跳转动作 */
      const isPushAction = Object.keys(actionTypes).includes(type);

      /* 跳转拦截 */
      if (isPushAction && !params[ALLOW_NAVIGATOR_ACTION]) {
        const navRef = getNavRef();

        interceptors(action, resAction => {
          navigatorNext(resAction || action, navRef);
        });

        return state;
      }

      return router.getStateForAction(state, action, options);
    },
  };
};

export default CustomStackRouter;
