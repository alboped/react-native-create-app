/**
 * 启动页面组件
 */
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

import { useConnect } from '@utils/redux';
import styles from './LaunchScreen.style';

function LaunchScreen() {
  const [countDown, setCountDown] = useState(3);
  const [app, dispatch] = useConnect(state => state.app);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(count => {
        if (count <= 0) {
          clearInterval(timer);
          dispatch('app/launch');
          return count;
        }
        return count - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView>
      <Text>启动页</Text>
      <Text style={styles.text}>{countDown}</Text>
    </SafeAreaView>
  );
}

export default LaunchScreen;
