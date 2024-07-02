import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useEffect, useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalshiping ,setTotalShipping] =useState(0);
    
    

    useEffect(() => {
        loadCartItems();
    }, []);
    //load cart
    const loadCartItems = async () => {
        try {
            const storedCarts = await AsyncStorage.getItem("carts");
            if (storedCarts !== null) {
                const parsedCarts = JSON.parse(storedCarts);
                setCarts(parsedCarts);
                calculateTotalPrice(parsedCarts);
            }
        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    };
//save cart
    const saveCarts = async (updatedCarts) => {
        try {
            await AsyncStorage.setItem("carts", JSON.stringify(updatedCarts));
            setCarts(updatedCarts);
            calculateTotalPrice(updatedCarts);
        } catch (error) {
            console.error("Error saving cart items:", error);
        }
    };
//add cart
    const addToCart = async (item) => {
       
        const existingItemIndex = carts.findIndex((cartItem) =>  
            cartItem.id === item.id &&
            cartItem.size === item.size &&
            cartItem.color === item.color);
        if (existingItemIndex !== -1) {
          

            const updatedCarts = [...carts];
            updatedCarts[existingItemIndex].quantity+=1;
            
            await saveCarts(updatedCarts);
        } else {
            const isid=item.id+''+item.size+''+item.color;

            const newItem ={...item,quantity : 1, isid }
            
            const updatedCarts = [...carts, newItem ];
            await saveCarts(updatedCarts);
        }
    };
//delete cart
    const deleteItemFromCart = async (item) => {
        const updatedCarts = carts.filter((cartItem) => cartItem.isid !== item.isid);
        await saveCarts(updatedCarts);
    };
//delete all
    const clearCart = async () => {
        await AsyncStorage.removeItem("carts");
        setCarts([]);
        setTotalPrice(0);
    };
//update quantity
    const updateQuantity = async (item, newQuantity) => {
        const updatedCarts = carts.map((cartItem) => {
            if (cartItem.isid === item.isid) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
    
        await saveCarts(updatedCarts);
    };
//total mycart
    const calculateTotalPrice = (carts) => {
        const totalPrice = carts.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
        const totalshiping =carts.reduce((total,item)=>total+item.quantity*2, 0);
        setTotalShipping(totalshiping);
    };
//total direct


    const value = {
        carts,
        totalPrice,
        addToCart,
        deleteItemFromCart,
        updateQuantity,
        clearCart,
        totalshiping,   
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

