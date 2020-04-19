import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { useDispatcher } from '@utils/redux';
import useRouter from '@navigator/useRouter';

function ListExample(props) {
  const router = useRouter(props);
  const listExample = useSelector(state => state.app.listExample || []);
  const dispatch = useDispatcher();

  React.useEffect(() => {
    dispatch('app/getList');
  }, []);

  push = () => {
    router.push('ButtonGroupExample');
  }

  add = () => {
    dispatch('app/getList', {
      count: count + 1
    });
  }

  console.log(listExample);

  return (
    <View>
      {
        listExample.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{ name: item.icon }}
            bottomDivider
            chevron
            onPress={() => this.handleItemPress(item)}
          />
        ))
      }
    </View>
  );
}

export default ListExample;
