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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="orange" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,202.7C672,160,768,96,864,85.3C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      
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
    paddingBottom:80,
    
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
