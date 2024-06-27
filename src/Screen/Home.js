import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header.jsx';
import Productcart from '../component/Productcart.jsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/data.json';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState(data.products);
    const [filteredProducts, setFilteredProducts] = useState(data.products);

    // Handle like action
    const handleliked = (item) => {
        const newProducts = products.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isliked: !prod.isliked,
                };
            }
            return prod;
        });
        setProducts(newProducts);
        setFilteredProducts(newProducts);
    };

    // Handle search input change
    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
    };

    // Render each item in the FlatList
    const renderItem = ({ item }) => (
        <Productcart
            item={item}
            handleliked={handleliked}
        />
    );

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header />
            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={styles.textlove}>What do you love ? </Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name={"search"} size={26} color={"#C0C0C0"} style={styles.iconcontainer} />
                            <TextInput
                                style={styles.textinput}
                                placeholder='Search'
                                onChangeText={handleSearch}
                                value={searchQuery}
                            />
                        </View>
                    </>
                }
                numColumns={2}
                data={filteredProducts} // Use filteredProducts instead of products
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textlove: {
        fontSize: 28,
        color: "black",
        marginTop: 20,
    },
    inputContainer: {
        backgroundColor: "white",
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    textinput: {
        flex: 1,
    },
    iconcontainer: {
        marginHorizontal: 20,
    },
});

export default Home;
