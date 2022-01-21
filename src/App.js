import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RouteNavigation from '../Navigation'
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <SafeAreaProvider>
      <RouteNavigation />
    </SafeAreaProvider>
  );
};

export default App;
