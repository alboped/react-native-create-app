import { StackRouter, CommonActions } from '@react-navigation/native';

console.log('CommonActions', CommonActions);

/**
 * 自定义router
 */
const CustomStackRouter = options => {
  const router = StackRouter(options);

  return {
    ...router,
    /**
     * 路由动作拦截函数
     * @param {Object} state 路由状态
     * @param {Object} action 路由动作
     * @param {Object} options 路由参数
     */
    getStateForAction(state, action, options) {
      const {payload = {}, type} = action;
      /* 判断是否为跳转动作 */
      const isPush = ['NAVIGATE', 'PUSH'].includes(type);

      if (isPush && payload.name === 'ButtonExample') {
        return state;
      }

      return router.getStateForAction(state, action, options);
    },
  };
};

export default CustomStackRouter;
