import React from 'react';
import { Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title={`${count}Update count`} />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
};
