

import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { CartContext } from '../context/CartContext'; 

const CartCart = ({ item }) => {
    const {  deleteItemFromCart  } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); 
    const increaseQuantity = () => {
        setQuantity(quantity+1)
        
    };

    const decreaseQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.cartContent}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.price}>${item.price * quantity} </Text>
                <View style={styles.circleSizeContainer}>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                    <View style={styles.circleSize}>
                        <Text style={styles.textSize}>{item.size}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.DeleteContainer}>
                <TouchableOpacity onPress={decreaseQuantity} style={styles.iconButton}>
                    <Entypo name={'chevron-down'} size={23} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity} style={styles.iconButton}>
                    <Entypo name={'chevron-up'} size={23} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItemFromCart(item)} style={styles.iconButton}>
                    <AntDesign name={'delete'} color={'black'} size={20} />
                </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    textSize: {
        fontSize: 18,
        fontWeight: '500',
    },
    DeleteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 5,
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
});

export default CartCart;
