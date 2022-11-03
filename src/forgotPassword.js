import { StyleSheet, Text, View, TextInput,TouchableOpacity  } from 'react-native'
import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './firebase'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Forgot({navigation}) {
  const [email, setEmail] = React.useState('');
  
  
  const Reset = (() => {
      sendPasswordResetEmail(auth, email).then(()=>{
        alert('passowrd reset link has been sent to your email')
        navigation.push('login');
      }).catch((error)=>{
        console.log(error);
      })  
  });

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={() => {navigation.goBack();}} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
                    {/* <FontAwesomeIcon icon={faArrowLeft}  /> */}
                    <Icon 
                        style={styles.iconicIcon}
                        size='30'
                        name='arrow-left'
                        type='ionicons'
                        color='black'
                        
                    />
        </TouchableOpacity>
        <Text style={{paddingBottom:50, color:'blue'}}>Forgot Password?</Text>
      <View style={{height:200,width:250,}}>
      <Text style={{textAlign:'center'}}>Enter your email address and we'll send you the link to retrieve your password</Text>
            <TextInput 
            placeholder='Enter Email' 
            onChangeText={(email)=>setEmail(email)}
            style={[styles.inputBox,
              {
                height:30,
                width:250,
                border:'1px solid grey',
                marginTop:20, 
                paddingLeft:10, 
                borderRadius:4,
                
                }
            ]}
            
            />
            <TouchableOpacity
              onPress={Reset} 
              style={{
              backgroundColor:'lightgrey',
              width:100,
              height:40,
              textAlign:'center',
              paddingTop:10,
              marginLeft:75,
              marginTop:20,
              borderRadius:4,
              
              }}
              >
                <Text style={{color:'white'}}>Send Link</Text>
              </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})