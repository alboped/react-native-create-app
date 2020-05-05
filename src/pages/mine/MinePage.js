import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useRouter from '@navigator/useRouter';
import { useConnect } from '@utils/redux';

function MinePage(props) {
  const router = useRouter(props);
  const [count, dispatch] = useConnect(state => state.example.count);

  const push = () => {
    router.push('ButtonGroupExample');
  };

  const add = () => {
    dispatch('example/updateState', {
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

export default MinePage;
