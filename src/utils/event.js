/**
 * 事件监听 Hook
 */
import { useEffect, useRef } from 'react';
// import { DeviceEventEmitter } from 'react-native';

/**
 * 监听事件列表
 */
const eventMap = {};

/**
 * 监听事件
 */
// DeviceEventEmitter.addListener('appRootEvent', args => {
//   console.log(args);
// });

/**
 * 新增监听事件
 * @param {String} eventName 事件名称
 * @param {Function} eventCallback 事件回调函数
 * @param {Boolean} isOnce 是否一次性
 */
const onEvent = (eventName, eventCallback, isOnce = false) => {
  eventMap[eventName] = {
    isOnce,
    eventCallback,
  };
};

/**
 * 新增监听事件
 * @param {String} eventName 事件名称
 * @param {Function} eventCallback 事件回调函数
 */
const onceEvent = (eventName, eventCallback) => {
  onEvent(eventName, eventCallback, true);
};

/**
 * 删除监听事件
 * @param {String} eventName 事件名称
 */
const removeEvent = (...eventNames) => {
  eventNames.forEach(item => {
    delete eventMap[item];
  });
};

/**
 * 给监听事件发送通知
 * @param {String} eventName 事件名称
 * @param {any} params 事件参数
 */
const emitEvent = (eventName, params) => {
  const eventItem = eventMap[eventName];
  if (eventItem) {
    eventItem.eventCallback(params);
    eventItem.isOnce && removeEvent(eventName);
  }
};

/**
 * 事件监听通知hook
 */
function useEvent() {
  const ref = useRef({ eventNames: {} });

  useEffect(() => {
    return () => {
      // 清除所有监听
      const { eventNames } = ref.current;
      removeEvent(...Object.keys(eventNames));
    };
  }, []);

  /**
   * 新增监听事件
   * @param {String} eventName 事件名称
   * @param {Function} eventCallback 事件回调
   */
  const on = (eventName, eventCallback, isOnce = false) => {
    const { eventNames } = ref.current;
    ref.current.eventNames = { ...eventNames, [eventName]: true };

    onEvent(eventName, eventCallback, isOnce);
  };

  /**
   * 新增一次性监听事件，发送一次通知后自动删除事件
   * @param {String} eventName 事件名称
   * @param {Function} eventCallback 事件回调函数
   */
  const once = (eventName, eventCallback) => {
    on(eventName, eventCallback, true);
  };

  /**
   * 给监听事件发送通知
   * @param {String} eventName 事件名称
   * @param {any} params 事件参数
   */
  const emit = (eventName, params) => {
    emitEvent(eventName, params);
  };

  /**
   * 删除监听事件
   * @param {String} eventName 事件名称
   */
  const remove = eventName => {
    removeEvent(eventName);
  };

  return { on, once, emit, remove };
}

export { useEvent };

export default {
  on: onEvent,
  once: onceEvent,
  emit: emitEvent,
  remove: removeEvent,
};
