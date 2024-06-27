import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
 
  return (
    <View style={styles.container}>
      <View style={styles.topvector}>
        <Image source={require('../asset/TopVectorLogin.png')} style={styles.imagetop} />
      </View>
      <View style={styles.logincontainer}>
        <Text style={styles.logintext}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={25} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Email' />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={26} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.rememberMe}>Remember me</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("HOME")  
        

        }
      >
  
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  topvector: {},
  imagetop: {
    width: '100%',
    height: 130,
  },
  logincontainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  logintext: {
    paddingTop: 50,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "400",
    color: "black",
    marginBottom: 25,
  },
  inputContainer: {
    backgroundColor: "#FBFCFC",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 3,
    marginVertical: 17,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  inputIcon: {
    marginLeft: 11,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  rememberMe: {
    marginLeft: 8,
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#E55B5B',
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Login;