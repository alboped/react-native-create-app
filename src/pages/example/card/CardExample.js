import React, { useLayoutEffect } from 'react';
import { Text, Button } from 'react-native';

import useRouter from '@navigator/useRouter';

export default function HomeScreen() {
  const [count, setCount] = React.useState(0);
  const router = useRouter();

  useLayoutEffect(() => {
    router.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title={`${count}Update count`} />
      ),
    });
  }, [router, count]);

  return <Text>Count: {count}</Text>;
}
