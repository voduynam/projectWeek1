import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';

const CartOut = ({ item }) => {
    
    const [quantity, setQuantity] = useState(item.quantity);

   
    return (
        <View style={styles.container}>
           <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.cartContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${(item.price * quantity).toFixed(0)}</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                    <View style={styles.circleSize}>
                        <Text style={styles.textSize}>{item.size}</Text>
                    </View>
                </View>
            </View>
             <View style={styles.DeleteContainer}>
            <Text style={styles.quantityText}>{quantity}</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        height: 125,
        width: '25%',
        borderRadius: 15,
        resizeMode: 'contain',
    },
    cartContent: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '500',
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18,
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
    },
    circleSizeContainer: {
        flexDirection: 'row',
    },
    circleSize: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        borderRadius: 16,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 20,
    },
    textSize: {
        fontSize: 18,
        fontWeight: '500',
    },

    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
        color: "black",
        fontWeight:"600",
 
    },

});

export default CartOut;
