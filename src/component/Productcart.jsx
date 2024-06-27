import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Touchable, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const productcart = ({item,handleliked}) => {
const navagation =useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
        navagation.navigate('PRODUCT_DETAILS' ,{item})
    }} style={styles.container}>
        <Image source={{uri:item.image}} style={styles.coverImage}/>
        <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity 
            style={styles.likecontainer}
            onPress={()=>{
                handleliked(item);
            }}
            >
            {item?.isliked ? (
                  <AntDesign name={"heart"} size={23} color={"red"}/>
            ) : (
            <AntDesign name={"hearto"} size={23} color={"red"}/>

            )  
        }
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        position:"relative",
    },
    coverImage:{
        height:256,
        width:"90%",
        borderRadius:20,
        marginVertical:10,
        marginRight:10,
        marginLeft:10,

    },
    title:{
        fontSize:18,
        color:"#444444",
        fontWeight:"500",

    },
    price:{
        fontSize:18,
        color:"#9C9C9C",
        fontWeight:"500",

    },
    content:{
        paddingLeft:15,
        
    },
    likecontainer :{
        height:34,
        width:34,
        backgroundColor:"#ffffff",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:15,
        right:16,

    },


});
export default productcart;
