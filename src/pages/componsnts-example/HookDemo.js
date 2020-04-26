import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useConnect } from '@utils/redux';
import useRouter from '@navigator/useRouter';

function Demo(props) {
  const router = useRouter(props);
  const [count, dispatch] = useConnect(state => state.app.count);

  const push = () => {
    router.push('ButtonGroupExample');
  };

  const add = () => {
    dispatch('app/updateState', {
      count: count + 1,
    });
  };

  return (
    <View>
      <Text>HookDemo</Text>
      <TouchableOpacity onPress={push}>
        <Text>跳转</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={add}>
        <Text>{count}</Text>
      </TouchableOpacity>
    </View>
  );
}

function View1(props) {
  return (
    <View
      style={{}}
    />
  );
}

export { View1 };

export default Demo;
