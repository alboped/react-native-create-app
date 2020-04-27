import React from 'react';
import { View } from 'react-native';
import { Text, Tooltip } from 'react-native-elements';

export default () => {
  return (
    <View flex>
      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    </View>
  );
};
