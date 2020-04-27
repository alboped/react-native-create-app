/**
 * 导航装饰器
 */
import {
  useNavigation,
  useRoute,
  // useIsFocused,
} from '@react-navigation/native';

/**
 * 获取router的hook
 * @param {Object}} props 组件props
 */
const useRouter = (props = {}) => {
  const _navigation = useNavigation();
  const navigation = props.navigation || _navigation;

  const _route = useRoute();
  const route = props.route || _route;

  // TODO 貌似没啥用
  // const isFocused = props.isFocused || useIsFocused();

  const navigate = (...args) => {
    return navigation.navigate(...args);
  };

  const push = (...args) => {
    return navigation.push(...args);
  };

  const back = (...args) => {
    return navigation.back(...args);
  };

  const replace = (...args) => {
    return navigation.replace(...args);
  };

  const pop = (...args) => {
    return navigation.pop(...args);
  };

  const popToTop = (...args) => {
    return navigation.popToTop(...args);
  };

  const isFocused = (...args) => {
    return navigation.isFocused(...args);
  };

  const setOptions = (...args) => {
    return navigation.setOptions(...args);
  };

  const setParams = (...args) => {
    return navigation.setParams(...args);
  };

  const goBack = (...args) => {
    return navigation.goBack(...args);
  };

  return {
    route,
    navigation,
    navigate,
    push,
    back,
    replace,
    pop,
    popToTop,
    isFocused,
    setOptions,
    setParams,
    goBack,
  };
};

export default useRouter;
