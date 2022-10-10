import React from 'react';
import { StyleSheet, Text, View,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import image1 from "../assets/dombolo1.jpg";
import image2 from "../assets/pot1.jpg"


export default function SignupPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
          <Image source={image2} style={styles.topImage}/>
      </View>
      <View style={styles.loginBox}>
            <Text style={styles.loginText}>Register Here</Text>
            <TextInput style={styles.inputBox} placeholder='Email Address here...'></TextInput>
            <TextInput style={styles.inputBox} placeholder='Username here...'></TextInput>
            <TextInput style={styles.inputBox} placeholder='Password here...'></TextInput>
            <TouchableOpacity style={styles.loginBtn}>
                    <Text>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.hyperLinkContainer}>
              <Text style={styles.hyperLinkText}>Already have an Account?</Text>
              <TouchableOpacity>
              <Text style={styles.hyperLink}>Login here...</Text>
              </TouchableOpacity>
            </Text>     
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
    paddingBottom:100,
    width:deviceWidth,
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
    width:deviceWidth-50,
    marginTop:20,
    backgroundColor:'#dededeee',
    paddingLeft:10,
    borderRadius:6,
  },
  hyperLinkContainer:{
    display:'flex',
    flexDirection:'row',
    width:deviceWidth-50,
    marginTop:20,
  },
  hyperLink:{
    color:'blue',
    marginLeft:5,
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
