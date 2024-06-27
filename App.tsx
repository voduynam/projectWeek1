import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screen/Home';
import ProductDetailsScreen from './src/Screen/ProductDetailsScreen';
import MyCart from './src/Screen/CartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import CartScreen from './src/Screen/CartScreen';
import { CartProvider, CartContext } from './src/context/CartContext';
import Payment from './src/Screen/Payment';
import Directpay from './src/Screen/Directpay';
import Onlinepay from './src/Screen/Onlinepay';
import MyHomeStack from './MyHomeStack'


const Tab = createBottomTabNavigator();



  


const App = () => {
 


  return (
    
   
    <CartProvider>
      
      <NavigationContainer>
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
                  <View style={{
                    position:"relative"

                  }}>
                    <Entypo name="shopping-cart" size={size} color={color} />
                    <View style={{
                      height:13,
                      width:13,
                      borderRadius:6,
                      backgroundColor:color,
                      justifyContent:"center",
                      alignItems:"center",
                      position:"absolute",
                      top:-11,
                      right:-4,
                      

                    }}>
                      <Text style={{
                        fontSize:10,
                        color:"white",
                        fontWeight:"500",
                        

                      }}>{carts?.length}</Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};


export default App;
