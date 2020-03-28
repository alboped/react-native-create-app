/**
 * 导航装饰器
 */
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';

/**
 * 导航高阶组件
 */
const routerHoc = () => WrappedComponent => {
  function EnhancedComponent(props) {
    const navigation = props.navigation || useNavigation();
    const route = props.route || useRoute();

    // TODO 貌似没啥用
    // const isFocused = props.isFocused || useIsFocused();

    const navigate = (...args) => {
      return navigation.navigate(...args);
    }

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

    const isFocused = (...args) => {
      return navigation.isFocused(...args);
    };

    const compsProps = {
      ...props,
      navigation,
      route,
      router: {
        navigate,
        push,
        back,
        replace,
        pop,
        isFocused,
      }
    }

    return (
      <WrappedComponent {...compsProps} />
    );
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);
  return EnhancedComponent;
}

export default routerHoc;
