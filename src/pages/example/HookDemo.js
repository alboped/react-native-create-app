import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useConnect } from '@utils/redux';
import useRouter from '@navigator/useRouter';

function Demo(props) {
  const router = useRouter(props);
  const [appState, dispatch] = useConnect(state => ({
    count: state.example.count,
    list: state.example.count,
  }));

  const push = () => {
    router.push('ButtonGroupExample');
  };

  const add = () => {
    dispatch('example/updateState', {
      count: appState.count + 1,
    });
  };

  return (
    <View>
      <Text>HookDemo</Text>
      <TouchableOpacity onPress={push}>
        <Text>跳转</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={add}>
        <Text>{appState.count}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Demo;
