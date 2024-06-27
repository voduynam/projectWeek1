import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CartCart = ({ item, deleteItemFromCart }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image}} style={styles.coverImage} />
            <View style={styles.cartContent}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.price}>${item.price} </Text>
                <View style={styles.circleSizeContainer}>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                    <View style={styles.circleSize}>
                        <Text style={styles.textSize}>{item.size}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
                <AntDesign name={"delete"} color={"black"} size={20} style={styles.iconDeleteContainer} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
    },
    coverImage: {
        height: 125,
        width: "25%",
        borderRadius: 15,
        resizeMode: "contain",
    },
    cartContent: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color: "#444444",
        fontWeight: "500",
    },
    price: {
        color: "#797979",
        marginVertical: 10,
        fontSize: 18,
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
    },
    circleSizeContainer: {
        flexDirection: "row",
    },
    circleSize: {
        backgroundColor: "white",
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
    },
    textSize: {
        fontSize: 18,
        fontWeight: "500",
    },
    iconDeleteContainer: {
        alignSelf: "center",
    },
});

export default CartCart;
