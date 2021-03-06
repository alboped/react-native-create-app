import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

import { useConnect } from '@utils/redux';

function ListExample() {
  const [listExample, dispatch] = useConnect(state => state.example.listExample);

  useEffect(() => {
    dispatch('example/getList');
    return function () {
      console.log('unmount-------------------------');
    };
  }, []);

  const handleItemPress = item => {
    console.log(item);
  };

  return (
    <View>
      {listExample.map((item, index) => (
        <ListItem
          key={index}
          title={item.name}
          bottomDivider
          chevron
          onPress={() => handleItemPress(item)}
        />
      ))}
    </View>
  );
}

export default ListExample;
