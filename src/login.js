import React from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
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
            <TouchableOpacity style={styles.loginBtn}>
                    <Text>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.hyperLinksContainer}>
              <TouchableOpacity href='#' >
                <Text style={styles.hyperLink}>Create Account</Text>
                </TouchableOpacity>  
              <TouchableOpacity href='#' >
                <Text style={styles.hyperLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
      </View>
      
      
    </SafeAreaView>
  );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  topView:{
    flex:1,
  },
  topImage:{
    height:200,
    width:deviceWidth-20,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  loginBox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingBottom:140,
    
  },
  loginText:{
    color:'black',
    fontWeight:'bolder',
    textAlign:'center',
    fontSize:30,
  },
  inputBox:{
    height:40,
    width:deviceWidth-50,
    marginTop:20,
    backgroundColor:'#dededeee',
    paddingLeft:10,
    borderRadius:6,
  },
  hyperLinksContainer:{
    width:deviceWidth-50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  hyperLink:{
    textAlign:'center',
    color:'blue',
  },
  loginBtn:{
    backgroundColor:'orange',
    height:35,
    width:deviceWidth-50,
    textAlign:'center',
    paddingTop:5,
    borderRadius:8,
    marginTop:20,
  },

});
