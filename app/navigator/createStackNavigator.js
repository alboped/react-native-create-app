import React from 'react';
import { useNavigationBuilder, createNavigatorFactory } from '@react-navigation/native';
import { StackView } from '@react-navigation/stack';

import StackRouter from './StackRouter';

/**
 * 自定义navigator创建函数
 * @param {Object} navigator 创建参数
 */
const StackNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  ...rest
}) => {
  const { state, navigation, descriptors } = useNavigationBuilder(StackRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <StackView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  )
}

export default createNavigatorFactory(StackNavigator);
