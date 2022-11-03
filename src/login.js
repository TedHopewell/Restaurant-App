import React from 'react';
import { StyleSheet, Text, View,Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import image2 from "../assets/pot1.jpg"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../src/firebase';
import googleIcon from '../assets/google.png'


const provider = new GoogleAuthProvider();

export default function LoginPage({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = (() =>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigation.push('home');
    }).catch((error) => {
      console.log(error);
    })
  })

  const LoginWithGoogle =() =>{
    signInWithPopup(auth,provider).
    then((result)=>{
      console.log((result));
      navigation.push("home")
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.topView}>
          <Image source={image2} style={styles.topImage}/>
      </View>
      <View style={styles.loginBox}>
            <Text style={styles.loginText}>Welcome Back</Text>
            <TextInput style={styles.inputBox} placeholder='Username here...' onChangeText={(email) => setEmail(email)} ></TextInput>
            <TextInput style={styles.inputBox} placeholder='Password here...' secureTextEntry={true} onChangeText={(password) => setPassword(password)}></TextInput>
            <TouchableOpacity style={styles.loginBtn} >
                    <Text style={{fontSize:20,fontWeight:'800'}} onPress={login}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtnGoogle} >
                    <Image source={googleIcon} style={{width:20,height:20}} />
                    <Text style={{fontSize:20,fontWeight:'800',paddingRight:20}} onPress={LoginWithGoogle}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.hyperLinksContainer}>
              <TouchableOpacity onPress={()=> {navigation.push('signup')}}>
                <Text style={styles.hyperLink}>Create Account</Text>
                </TouchableOpacity>  
              <TouchableOpacity onPress={() => navigation.push('forgotPassword')}>
                <Text style={styles.hyperLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
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
    paddingHorizontal:20,
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
    alignSelf:'center',
    backgroundColor:'orange',
    height:35,
    width:deviceWidth-50,
    textAlign:'center',
    borderRadius:8,
    marginTop:20,
  },
  loginBtnGoogle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    height:35,
    width:deviceWidth-50,
    textAlign:'center',
    borderRadius:8,
    marginTop:20,
  },

});
