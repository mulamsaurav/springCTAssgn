import {View, Text} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigator/RootNavigator.tsx';
import {store} from './src/redux/store.ts';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
