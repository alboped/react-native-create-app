/**
 * 启动页面组件
 */
import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { useConnect } from '@utils/redux';

function Login() {
  const [, dispatch] = useConnect();

  const loginSubmit = () => {
    dispatch('app/login', true);
  };

  return (
    <SafeAreaView>
      <Text>登录</Text>
      <Button title="登录" onPress={loginSubmit} />
    </SafeAreaView>
  );
}

export default Login;
