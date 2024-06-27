import React, { useContext, useState } from 'react';
import { BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];



const ProductDetailsScreen = () => {
  const route=useRoute();
  const item= route.params.item;
  // console.log(route.params.item);
    const navigation=useNavigation();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const {addToCart}=useContext(CartContext)

    const handleAddToCart =(item)=>{
        item.size=selectedSize;
        item.color=selectedColor;
        addToCart(item);
        navigation.navigate("CartScreen");
    }

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.title, styles.price]}>{item.price}</Text>
            </View>
            <View>
                <Text style={[styles.title, styles.sizeText]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {sizes.map((size) => (
                        <TouchableOpacity
                            key={size}
                            style={[
                                styles.sizeValueContainer,
                                selectedSize === size && styles.selectedSizeContainer
                            ]}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text
                                style={[
                                    styles.sizeValue,
                                    selectedSize === size && styles.selectedSizeValue
                                ]}                            
                            >
                                {size}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Text style={[styles.title, styles.colorText]}>
                Colors
            </Text>
            <View style={styles.colorContainer}>
                {colorsArray.map((color) => (
                    <TouchableOpacity
                        key={color}
                        onPress={() => setSelectedColor(color)}
                        style={[
                            styles.circleBorder,
                            selectedColor === color && {
                                borderColor: color,
                                borderWidth: 2,
                            }
                        ]}
                    >
                        <View
                            style={[
                                styles.circle,
                                { backgroundColor: color }
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View>
              {/* button container */}
            <TouchableOpacity style={styles.buttonContainer} 
                onPress={()=>{
                    handleAddToCart(item);

                }}
            >
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>   
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 5,
    },
    coverImage: {
        width: "100%",
        height: 380,
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500",
    },
    price: {
        color: "#4D4D4D",
    },
    sizeText: {
        marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",
        color: "#444444",
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        backgroundColor: "white",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    selectedSizeContainer: {
        borderWidth: 2,
        borderColor: "#E55B5B",
    },
    selectedSizeValue: {
        color: "#E55B5B",
    },
    colorText: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    circle: {
        height: 24,
        width: 24,
        borderRadius: 12,
    },
    colorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },
    circleBorder: {
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    buttonContainer:{
      backgroundColor:"#E96E6E",
      padding:10,
      margin:10,
      borderRadius:20,


    },
    buttonText:{
      fontSize: 24,
      fontWeight:"600",
      textAlign:"center",
      color:"white",



    }
});

export default ProductDetailsScreen;
