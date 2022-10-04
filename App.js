import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, TextInput } from 'react-native';
import image1 from "./assets/dombolo1.jpg";
import image2 from "./assets/pot1.jpg"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
          <Image source={image2} style={styles.topImage}/>
      </View>
      <View style={styles.loginBox}>
            <Text style={styles.loginText}>Login Here</Text>
            <TextInput style={styles.inputBox} placeholder='Username here...'></TextInput>
            <TextInput style={styles.inputBox} placeholder='Password here...'></TextInput>
            <Text></Text>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView:{
    flex:1,
  },
  topImage:{
    height:250,
    width:380,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  loginBox:{
    flex:2,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  loginText:{
    color:'black',
    fontWeight:'bolder',
    textAlign:'center',
    fontSize:30,
    paddingTop:60,
  },
  inputBox:{
    height:40,
    width:'150%',
    border:'2px solid white',
    marginTop:20,
    backgroundColor:'#dededeee',
    paddingLeft:10,
  },
});
