import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App.tsx';
import Login from './src/Screen/Login.js';
import Home from './src/Screen/Home.js';
import ProductDetailsScreen from './src/Screen/ProductDetailsScreen.js';
import Payment from './src/Screen/Payment.js';
import Directpay from './src/Screen/Directpay.js';
import Onlinepay from './src/Screen/Onlinepay.js';

const Stack = createNativeStackNavigator();
const MyHomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
        <Stack.Screen name="PAYMENT" component={Payment} />
        <Stack.Screen name="DIRECTPAY" component={Directpay} />
        <Stack.Screen name="ONLINEPAY" component={Onlinepay} />
      </Stack.Navigator>
    );
  };


export default MyHomeStack;
