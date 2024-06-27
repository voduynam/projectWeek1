import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
  const Header = ({isCart}) => {
      const navigation=useNavigation();

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.appiconContainer} 
        onPress={()=> navigation.navigate("HOME")}
        >
          {
            isCart? <Ionicons name={"chevron-back"} 
            color={"#E96E6E"} 
            size={24}
            />:<Image source={require("../asset/appicon.png")} style={styles.appicon} />
          }
          
          
          </TouchableOpacity>
        
        {isCart ? <Text style={styles.mycart}>My Cart</Text> : null}
      <View>
        <Image source={require("../asset/Ellipse.png")} style={styles.db}/>
      </View>
    </View>
  );
};
const styles =StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:5,
    
  },
  
  appicon:{
  height:28,
  width:28,
  
},
appiconContainer:{
  backgroundColor:"white",
  height:44,
  width:44,
  borderRadius:22,
  justifyContent:"center",
  alignItems:"center",

},
db:{
  height:44,
  width:44,
  borderRadius:22,
},
mycart:{
  fontSize:28,
  color:"black",
  
}

})

export default Header;
