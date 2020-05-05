/**
 * redux 工具
 */
import { useSelector, useDispatch } from 'react-redux';

/**
 * hook, 封装dispatch方法；
 */
export const useConnect = selector => {
  const dispatch = useDispatch();
  const state = useSelector(selector || (() => {}));

  const dispatcher = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  if (!selector) {
    return dispatcher;
  }

  return [state, dispatcher];
};
