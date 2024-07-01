import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import userData from '../data/User.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const Login = ({ onLogin }) => {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get('https://667f7e38f2cb59c38dc90858.mockapi.io/api/user');
        setUsers(response.data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
    

    const loadCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('savedEmail');
        const savedPassword = await AsyncStorage.getItem('savedPassword');

        if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setSelection(true);
        }
      } catch (error) {
        console.error('Failed to load credentials', error);
      }
    };

    loadCredentials();
  }, []);

  const handleLogin = async () => {
    const userFound = users.find((user) => user.email === email && user.password === password);
    if (userFound) {
      if (isSelected) {
        await AsyncStorage.setItem('savedEmail', email);
        await AsyncStorage.setItem('savedPassword', password);
      } else {
        await AsyncStorage.removeItem('savedEmail');
        await AsyncStorage.removeItem('savedPassword');
      }
      onLogin();
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  const handleRemember = () => {
    setSelection(!isSelected);
  };

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
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          onChangeText={setEmail}
          value={email}
          required
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={26} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          required
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={handleRemember}
          style={styles.checkbox}
        />
        <Text style={styles.rememberMe}>Remember me</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
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
