import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import useRouter from '@navigator/useRouter';

export default function ButtonExample() {
  const router = useRouter();
  const routerPage = () => {
    router.navigate('ButtonGroupExample');
  };

  return (
    <View>
      <Button title="默认按钮" onPress={routerPage} />
    </View>
  );
}
