import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
    <View>
      <View style={styles.headcontainer}>
        <TouchableOpacity style={styles.gobackbtn} onPress={() => navigation.goBack()}><AntDesign name="left" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.textheader}>Sign Up</Text>
        <Text style={styles.textinfo}>Please enter the required information to sign in to Quasar</Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput placeholder='Name' style={styles.input}></TextInput>
        <TextInput placeholder='Email' style={styles.input}></TextInput>
        <TextInput placeholder='Password' style={styles.input}></TextInput>
        <TextInput placeholder='Confirm Password' style={styles.input}></TextInput>
        <TouchableOpacity style={styles.signupbtn}><Text style={styles.signuptext}>Sign Up</Text></TouchableOpacity>
      </View>
    </View>

    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
    },

    headcontainer: {
      backgroundColor: '#0c67dd',
      width: '100%',
      height: '60%',
      top: -50,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50
    },

    gobackbtn: {
      top: 40,
      right: 160,
      fontWeight: 'bold'
  },

    textheader: {
      color: 'white',
      fontSize: 36,
      fontWeight: 'bold',
      top: 200,
      left: 30
    },

    textinfo: {
      color: 'white',
      top: 220,
      left: 30,
      width: "80%"
    },

    input: {
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        border: 'black',
        borderWidth: 0.5,
        borderRadius: 25,
        marginTop: 30,
        paddingLeft: 20,
        color: 'green',
        top: 80
    },

    inputcontainer: {
      bottom: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },

    signupbtn: {
      width: 350,
      height: 50,
      backgroundColor: '#0c67dd',
      borderRadius: 30,
      top: 120,
      alignItems: 'center',
      justifyContent: 'center'
    },

    signuptext: {
      color: '#fff',
      fontSize: 16,
    }
})