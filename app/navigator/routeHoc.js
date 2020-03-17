/**
 * 导航装饰器
 */
import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * 事件通知高阶组件
 */
const routerHoc = () => WrappedComponent => {
  function EnhancedComponent(props) {
    const navigation = props.navigation || useNavigation();
    const route = props.route || useRoute();

    const push = (...args) => {
      return navigation.push(...args);
    };

    const back = (...args) => {
      return navigation.back(...args);
    };

    const replace = (...args) => {
      navigation.replace(...args);
    };

    const pop = (...args) => {
      navigation.pop(...args);
    };

    const compsProps = {
      ...props,
      route,
      router: {
        push,
        back,
        replace,
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
