import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';

function OverlayExample(props) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="打开" onPress={() => setVisible(true)} />
      <Overlay isVisible={visible} height={200}>
        <>
          <Text>Hello from Overlay!</Text>
          <Button title="关闭" onPress={() => setVisible(false)} />
        </>
      </Overlay>
    </View>
  );
}

export default OverlayExample;
