/**
 * 导航装饰器
 * !!! 暂时不用，建议全部使用Hook
 */
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import useRouter from './useRouter';

/**
 * 导航高阶组件
 */
const routerHoc = () => WrappedComponent => {
  function EnhancedComponent({ forwardRef, ...props }) {
    const router = useRouter(props);

    return <WrappedComponent {...props} router={router} ref={forwardRef} />;
  }

  EnhancedComponent.displayName = `withHOC(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return React.forwardRef((props, ref) => <EnhancedComponent {...props} forwardRef={ref} />);
};

export default routerHoc;
