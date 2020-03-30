/**
 * 导航装饰器
 */
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import useRouter from './useRouter';

/**
 * 导航高阶组件
 */
const routerHoc = () => WrappedComponent => {
  function EnhancedComponent(props) {
    const router = useRouter(props);

    return (
      <WrappedComponent
        {...props}
        router={router}
      />
    );
  }

  EnhancedComponent.displayName = `withHOC(${WrappedComponent.displayName || WrappedComponent.name})`;

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);
  return EnhancedComponent;
}

export default routerHoc;
