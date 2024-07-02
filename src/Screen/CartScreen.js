import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';
import CartCart from '../component/CartCart'; 
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
    const { carts, totalPrice,totalshiping } = useContext(CartContext);
    const Grand_Total = totalPrice+totalshiping;
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true} />
            </View>
            <FlatList
    data={carts}
    ListHeaderComponent={<></>}
    renderItem={({ item }) => <CartCart key={item.isid} item={item} />}
    ListFooterComponent={
        <View style={styles.bottomContentContainer}>
            <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>${totalPrice.toFixed(0)}</Text>
            </View>
            <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shipping:</Text>
                <Text style={styles.priceText}>${totalshiping}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>
                    ${Grand_Total.toFixed(0)}
                </Text>
            </View>
        </View>
    }
    keyExtractor={(item) => item.isid} 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 80 }}
/>

            <TouchableOpacity style={styles.checkoutContainer}
                onPress={() => navigation.navigate("PAYMENT")}
            >
                <Text style={styles.buttonText}>Check out</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    headerContainer: {
        marginBottom: 10,
    },
    checkoutContainer: {
        backgroundColor: "#E55B5B",
        width: "95%",
        borderRadius: 20,
        alignSelf: "center",
    },
    bottomContentContainer: {
        marginHorizontal: 10,
        marginTop: 30,
    },
    titleText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "500",
    },
    priceText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
    },
    divider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginTop: 10,
        marginBottom: 5,
    },
    grandPriceText: {
        color: "#3C3C3C",
        fontWeight: "700",
    },
    buttonText: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        padding: 10,
    },
    flexRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default CartScreen;
