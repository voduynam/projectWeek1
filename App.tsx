import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { CartProvider, CartContext } from './src/context/CartContext';

import Login from './src/Screen/Login';
import Home from './src/Screen/Home';
import ProductDetailsScreen from './src/Screen/ProductDetailsScreen';
import CartScreen from './src/Screen/CartScreen';
import Payment from './src/Screen/Payment';
import Directpay from './src/Screen/Directpay';
import Onlinepay from './src/Screen/Onlinepay';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyHomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HOME" component={Home} />
    <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    <Stack.Screen name="PAYMENT" component={Payment} />
    <Stack.Screen name="DIRECTPAY" component={Directpay} />
    <Stack.Screen name="ONLINEPAY" component={Onlinepay} />
   
  </Stack.Navigator>
);

const TabScreens = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#CB4335",
    }}
  >
    <Tab.Screen
      name="HOME_stack"
      component={MyHomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarIcon: ({ size, color }) => {
          const { carts } = useContext(CartContext);
          return (
            <View style={{ position: "relative" }}>
              <Entypo name="shopping-cart" size={size} color={color} />
              <View style={{
                height: 13,
                width: 13,
                borderRadius: 6,
                backgroundColor: color,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: -11,
                right: -4,
              }}>
                <Text style={{
                  fontSize: 10,
                  color: "white",
                  fontWeight: "500",
                }}>{carts?.length}</Text>
              </View>
            </View>
          );
        },
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loggedIn ? (
            <Stack.Screen name="MAIN" component={TabScreens} />
          ) : (
            <Stack.Screen name="LOGIN">
              {props => <Login {...props} onLogin={handleLogin} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
