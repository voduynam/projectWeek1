import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try {
            const cartsFromStorage = await AsyncStorage.getItem("carts");
            if (cartsFromStorage) {
                setCarts(JSON.parse(cartsFromStorage));
                calculateTotalPrice(JSON.parse(cartsFromStorage));
            }
        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    };

    const addToCart = async (item) => {
        try {
            const existingItemIndex = carts.findIndex((cartItem) => cartItem.id === item.id);

            if (existingItemIndex !== -1) {
                // Item already exists in cart, increase quantity
                const updatedCarts = [...carts];
                updatedCarts[existingItemIndex].quantity += 1;
                await AsyncStorage.setItem("carts", JSON.stringify(updatedCarts));
                setCarts(updatedCarts);
                calculateTotalPrice(updatedCarts);
            } else {
                // Add new item to cart
                const updatedCarts = [...carts, { ...item, quantity: 1 }];
                await AsyncStorage.setItem("carts", JSON.stringify(updatedCarts));
                setCarts(updatedCarts);
                calculateTotalPrice(updatedCarts);
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    const deleteItemFromCart = async (item) => {
        try {
            const newItems = carts.filter((cart) => cart.id !== item.id);
            await AsyncStorage.setItem("carts", JSON.stringify(newItems));
            setCarts(newItems);
            calculateTotalPrice(newItems);
        } catch (error) {
            console.error("Error deleting item from cart:", error);
        }
    };

    const clearCart = async () => {
        try {
            await AsyncStorage.removeItem("carts");
            setCarts([]);
            setTotalPrice(0);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    const calculateTotalPrice = (carts) => {
        const totalPrice = carts.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    };

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
