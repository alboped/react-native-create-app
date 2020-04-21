/**
 * redux 工具
 */
import { useDispatch } from 'react-redux';

/**
 * hook, 封装dispatch方法；
 */
export const useDispatcher = () => {
  const dispatch = useDispatch();
  return (type, payload) => dispatch({
    type,
    payload
  });
}
