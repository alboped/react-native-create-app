import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import { useConnect } from '@utils/redux';
import useRouter from '@navigator/useRouter';

function ExampleHome() {
  const router = useRouter();
  const [count, dispatch] = useConnect(state => state.app.count);

  const exampleList = [
    {
      title: 'Button 按钮',
      icon: 'crop-landscape',
      route: 'ButtonExample',
    },
    {
      title: 'ButtonGroup 按钮组',
      icon: 'filter-none',
      route: 'ButtonGroupExample',
    },
    {
      title: 'List 列表',
      icon: 'format-list-bulleted',
      route: 'ListExample',
    },
    {
      title: 'Card 卡片',
      icon: 'credit-card',
      route: 'CardExample',
    },
    {
      title: 'CheckBox 复选框',
      icon: 'check-box',
    },
    {
      title: 'Icon 图标',
      icon: 'apps',
    },
    {
      title: 'Text 文字',
      icon: 'text-format',
      route: 'TextExample',
    },
    {
      title: 'Overlay 遮罩',
      icon: 'text-format',
      route: 'OverlayExample',
    },
  ];

  const renderListItem = () => {
    return exampleList.map((item, index) => (
      <ListItem
        key={index}
        title={item.title}
        leftIcon={{ name: item.icon }}
        bottomDivider
        chevron
        onPress={() => handleItemPress(item)}
      />
    ));
  };

  const handleItemPress = item => {
    if (item.route) {
      router.push(item.route);
    }

    dispatch('app/updateState', {
      count: count + 1,
    });
  };

  return <ScrollView>{renderListItem()}</ScrollView>;
}

export default ExampleHome;
