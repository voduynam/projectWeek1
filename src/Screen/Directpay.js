import React, { useContext, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CartOut from '../component/CartOut'; 
import { CartContext } from '../context/CartContext';

const Directpay = ({ navigation }) => {
    const { carts, totalPrice } = useContext(CartContext);
    const [customer, setCustomer] = useState('');
    const [colorback, setColor] = useState("white");
    const [vocher, setVocher] = useState('');

    const handleCustomer = (text) => {
        const value = parseInt(text) || 0;
        setCustomer(value);
        if(value > grandTotal){
            setColor("#FEF6F8");
        }else{
            setColor("white");
              
        }
    };
    const handleVocher =(text)=>{
        const value = parseInt(text) || 0;
        setVocher(value);
        setColor("#FEF6F8");

        

    }

    
    const grandTotal = totalPrice * (1 - (vocher / 100.0));
    const Dirty_money= customer - grandTotal;
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <FlatList
                data={carts}
                ListHeaderComponent={<></>}
                renderItem={({ item }) => <CartOut key={item.isid} item={item} />}
                ListFooterComponent={
                    <View style={styles.bottomContentContainer}>
                       
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Total:</Text>
                            <Text style={styles.priceText}>${totalPrice.toFixed(0)}</Text>
                        </View>
                        
                        <View style={styles.flexRowContainer}>
                            
                            <Text style={styles.titleText}>Voucher:</Text>
                            <Text style={styles.dolaVocherText}>$</Text>
                            <TextInput 
                            backgroundColor={colorback}
                                style={styles.voCherText}
                                value={vocher.toString()}
                                onChangeText={handleVocher}
                                keyboardType="numeric"
                                
                            />
                             <Text style={styles.phantramText}>%</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Grand Total:</Text>
                            <Text style={[styles.priceText, styles.grandPriceText]}>
                                ${grandTotal.toFixed(0)}
                            </Text>
                        </View>
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Customer give:</Text>
                            <Text style={styles.dolaText}>$</Text>
                            <TextInput 
                            backgroundColor={colorback}
                                style={styles.CustomerText}
                                value={customer.toString()}
                                onChangeText={handleCustomer}
                                keyboardType="numeric"
                                
                            />
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Dirty money:</Text>
                            <Text style={[styles.priceText, styles.grandPriceText]}>
                                ${Dirty_money.toFixed(0)}
                            </Text>
                        </View>
                    </View>
                }
                keyExtractor={(item) => item.isid.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
            />

            <TouchableOpacity style={styles.checkoutContainer}
                onPress={() => navigation.navigate("PAYMENT")}
            >
                <Text style={styles.buttonText}>Pay now</Text>
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
        marginTop: 20,
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
        color:"white",
        textAlign: "center",
        padding: 10,
    },
    flexRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    CustomerText: {
        borderRadius: 270,
        textAlign: "center",
        fontSize: 18,
        justifyContent:"center",
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
      
    },
    dolaText:{
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
        marginLeft:160,

    },
    phantramText:{
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
        
        
    },
    voCherText:{
        borderRadius: 300,
        textAlign: "center",
        fontSize: 18,
        justifyContent:"center",
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
    },
    dolaVocherText:{
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
        marginLeft:226,
    }
});

export default Directpay;
