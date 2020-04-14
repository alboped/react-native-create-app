import { StackRouter, StackActions, CommonActions } from '@react-navigation/native';

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
      const { name = '', params = {} } = payload;

      /* 判断是否为跳转动作 */
      const isPushAction = Object.keys(actionTypes).includes(type);

      /* 跳转拦截 */
      if (isPushAction && !params[ALLOW_NAVIGATOR_ACTION] && payload.name === 'ButtonExample') {
        const navRef = getNavRef();
        if (navRef) {
          navigation[actionTypes[type]](
            navRef.current?.dispatch,
            payload.name,
            {
              ...(payload.params || {}),
              [ALLOW_NAVIGATOR_ACTION]: true,
            }
          );
        }
        return state;
      }

      return router.getStateForAction(state, action, options);
    },
  };
};

export default CustomStackRouter;
