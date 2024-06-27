import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';

const Payment = ({navigation}) => {
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Choose payment method</Text>
            </View>

            <TouchableOpacity style={styles.dpContainer}
               onPress={() => navigation.navigate("DIRECTPAY")}
            >
                <Text style={styles.dpText}>Direct payment </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opContainer}onPress={()=>{
                navigation.navigate("ONLINEPAY");

            }}>
                <Text style={styles.opText}>Online payment</Text>
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
    dpText: {
        fontSize: 40,
        padding: 20,
        color: "black",
        

    },
    opText: {
        fontSize: 39,
        padding: 20,
        color: "black",
        fontWeight:"̀900",


    },
    dpContainer: {
        backgroundColor: "#E96E6E",
        marginVertical: 80,
        borderRadius: 50,
        marginHorizontal: 10,
        borderWidth: 2,
        



    },
    opContainer: {
        backgroundColor: "#E96E6E",
        marginVertical: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        borderWidth: 2,
    },
    headerText: {
        fontSize: 25,
        fontWeight: "900",
        textAlign: "left",
        color: "black"

    },
    headerContainer: {
        justifyContent: "center",
        marginVertical: 20,

    }
});

export default Payment;
