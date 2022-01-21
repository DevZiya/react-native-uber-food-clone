import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/screens/Home'
import RestaurantDetail from './src/screens/RestaurantDetail'
import { Provider } from 'react-redux';
import {store} from './src/Redux/store'
import OrderCompleted from './src/screens/OrderCompleted';

const Navigation = () => {
    const Stack = createStackNavigator()
    const screenOptions= {
        headerShown:false
    }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            <Stack.Screen name='OrderCompleted' component={OrderCompleted}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
