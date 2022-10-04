import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import image1 from "../assets/dombolo1.jpg";
import image2 from "../assets/pot1.jpg"


export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
          <Image source={image2} style={styles.topImage}/>
      </View>
      <View style={styles.loginBox}>
            <Text style={styles.loginText}>Login Here</Text>
            <TextInput style={styles.inputBox} placeholder='Username here...'></TextInput>
            <TextInput style={styles.inputBox} placeholder='Password here...'></TextInput>
            <TouchableOpacity href='#' style={styles.hyperLink}>Forgot Password</TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                    <Text>Sign In</Text>
            </TouchableOpacity>     
      </View>
      
      
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
    height:200,
    width:360,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  loginBox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingBottom:180,
    
  },
  loginText:{
    color:'black',
    fontWeight:'bolder',
    textAlign:'center',
    fontSize:30,
    paddingTop:20,
  },
  inputBox:{
    height:40,
    width:'150%',
    marginTop:20,
    backgroundColor:'#dededeee',
    paddingLeft:10,
  },
  hyperLink:{
    width:'140%',
    marginLeft:15,
    marginTop:10,
    textAlign:'Right',
  },
  loginBtn:{
    backgroundColor:'orange',
    height:35,
    width:80,
    textAlign:'center',
    paddingTop:5,
    borderRadius:8,
    marginTop:10,
  },

});
