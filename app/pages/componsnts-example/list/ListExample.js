import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { useDispatcher } from '@utils/redux';
import useRouter from '@navigator/useRouter';

function ListExample(props) {
  const router = useRouter(props);
  const listExample = useSelector(state => state.app.listExample || []);
  const dispatch = useDispatcher();

  useEffect(() => {
    dispatch('app/getList');
  }, []);

  handleItemPress = item => {
    console.log(item);
  }

  console.log(listExample);

  return (
    <View>
      {
        listExample.map((item, index) => (
          <ListItem
            key={index}
            title={item.name}
            bottomDivider
            chevron
            onPress={() => handleItemPress(item)}
          />
        ))
      }
    </View>
  );
}

export default ListExample;
