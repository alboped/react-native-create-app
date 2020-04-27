import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import useRouter from '@navigator/useRouter';

export default function ButtonGroupExample() {
  const [selectedIndex] = useState(2);
  const router = useRouter();

  const routerPage = () => {
    router.navigate('ButtonExample');
  };

  const buttons = ['Hello', 'World', 'Buttons'];

  return (
    <View>
      <ButtonGroup onPress={routerPage} selectedIndex={selectedIndex} buttons={buttons} />
    </View>
  );
}
