import { persistReducer, persistStore } from 'redux-persist';

export const persistEnhancer = opts => {
  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(persistReducer(opts, reducer), initialState, enhancer);
    const persistor = persistStore(store);
    return { ...store, persistor };
  };
};
