import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import img from '../assets/pap2.jpg'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CartPage({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Image source={img} style={styles.topViewImg}></Image>
            <TouchableOpacity onPress={()=> {navigation.push('home')}}  style={{height:20, width:20,alignSelf:'flex-start',marginLeft:20}}>
                    <FontAwesomeIcon icon={faArrowLeft}  />
            </TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'bold', fontFamily:'roboto',paddingLeft:20}}>Pap and Steak</Text>
        </View>
        <View  style={styles.midView}>
             <View style={styles.infoContainer}>
                    <Text >Our pap and stake is one of our favorites and the meat is specifically imported from the Angolan bool farm</Text>
              </View> 
        </View>
        <View  style={styles.bottomView}>
            <Text>menu here</Text>
        </View>

    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
      },
      topView:{
        height:300,
        width:'100%',
        borderBottomLeftRadius:80,
        borderBottomRightRadius:40,
        
      },
      topViewImg:{
        height:220,
        width:deviceWidth,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:100,
        paddingRight:100,
      },
      midView:{
        flex:12,
        height:500,
        width:'100%',
      },
      
      infoContainer:{
        
        height:50,
        width:'100%',
        padding:20,
        

      },
      bottomView:{
      
        height:50,
        width:'100%',
        backgroundColor:'blue',
      }
})

