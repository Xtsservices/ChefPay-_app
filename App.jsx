import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/AppNavigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#E8F4FD" />
    <AppNavigator />
  </>
);

export default App;
