import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from '~/navigator/useRouter';

function Demo(props) {
  const router = useRouter(props);
  const count = useSelector(state => state.app.count);
  const dispatch = useDispatch();

  push = () => {
    router.push('ButtonGroupExample');
  }

  add = () => {
    dispatch({
      type: 'app/updateState',
      payload: {
        count: count + 1
      }
    });
  }

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

export default Demo;
