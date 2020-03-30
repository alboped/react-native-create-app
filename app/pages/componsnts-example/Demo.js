import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useRouter from '~/navigator/useRouter';

function Demo(props) {
  const router = useRouter(props);

  test = () => {
    router.push('CardExample');
  }

  return (
    <View>
      <TouchableOpacity onPress={test}>
        <Text>1234234234</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Demo;
