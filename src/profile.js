import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from './firebase';
import image1 from '../assets/img.jpeg'

const Profilepage = ({navigation}) => {

  let user = auth.currentUser;
  const imageSrc=(user.photoURL)
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
        <TouchableOpacity onPress={()=> {navigation.goBack();}} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
                    {/* <FontAwesomeIcon icon={faArrowLeft}  /> */}
                    <Icon 
                        style={styles.iconicIcon}
                        size='30'
                        name='arrow-left'
                        type='ionicons'
                        color='black'
                        
                    />
        </TouchableOpacity>

        </View>
        <View style={styles.midView}>
            <Image style={{backgroundColor:'white',height:150,width:150,marginTop:-50,borderRadius:100}} source={imageSrc} />
    
            <Text style={{color:'grey',paddingTop:20,paddingLeft:30,paddingRight:20}}>Welcome<Text style={{color:'black',paddingTop:20,fontWeight:'bold'}}> {user.displayName}</Text> It's good to have you back</Text>

            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:40}}>
                <Text style={{paddingTop:15,paddingLeft:10}}>{user.email}</Text>
            </View>
            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:20}}>
                <Text style={{paddingTop:15,paddingLeft:10}}>{user.displayName}</Text>
            </View>

            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:20}}>
                <Text style={{padding:10}}>Profile page still under development</Text>
            </View>


        </View>
        <View style={styles.bottomView}>

        </View>
          </View>
  )
}

export default Profilepage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    topView:{
        flex:4,
        width:'100%',
        backgroundColor:'orange',
        
    },
    midView:{
        flex:12,
        width:'100%',
        alignItems:'center',
        backgroundColor:'rgb(252,246,246)',

    },
    bottomView:{
        flex:2,
        backgroundColor:'orange',
        width:'100%'
    },
    iconicIcon:{
        marginVertical:15,
        marginLeft:20,
        width:20
    },

})