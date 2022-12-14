import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import image1 from "../assets/dombolo1.jpg";
import image2 from "../assets/pot1.jpg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../src/firebase'


export default function SignupPage({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userId, setUserID] = React.useState('');
  const [user, setUser] = React.useState('');
  
  const register = (() => {
    createUserWithEmailAndPassword(auth,email,password).then(async(userCredentials)=>{
      const profileName = userId;
      setUser(() => ({...userCredentials.user}));
      updateProfile(auth.currentUser, {displayName:profileName}).then().catch();
      alert(profileName + "Registered successfully");
      navigation.push('home');
    }).catch((error) =>{
      console.log(error)
    })
  })

  
  



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.topView}>
          <Image source={image2} style={styles.topImage}/>
      </View>
      <View style={styles.loginBox}>
            <Text style={styles.loginText}>Register Here</Text>
            <TextInput style={styles.inputBox} placeholder='Email Address here...' onChangeText={(email) => setEmail(email)} ></TextInput>
            <TextInput style={styles.inputBox} placeholder='Username here...' onChangeText={(userId) => setUserID(userId)}></TextInput>
            <TextInput style={styles.inputBox} placeholder='Password here...' onChangeText={(password) => setPassword(password)}></TextInput>
            <TouchableOpacity style={styles.loginBtn} onPress={register}>
                    <Text style={{fontSize:20,fontWeight:'800'}}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.hyperLinkContainer}>
              <Text style={styles.hyperLinkText}>Already have an Account?</Text>
              <TouchableOpacity onPress={()=> {navigation.push('login')}}>
              <Text style={styles.hyperLink}>Login here...</Text>
              </TouchableOpacity>
            </Text>     
      </View>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="orange" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,202.7C672,160,768,96,864,85.3C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </KeyboardAvoidingView>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(252,246,246)',
    
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
    paddingHorizontal:20,
    borderRadius:6,
  },
  hyperLinkContainer:{
    display:'flex',
    flexDirection:'row',
    width:deviceWidth-50,
    marginTop:20,
  },
  hyperLinkText:{
    color:'black'
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
    borderRadius:8,
    marginTop:20,
  },

});
