import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import img from '../assets/pap2.jpg'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CartPage() {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Image source={img} style={styles.topViewImg}></Image>
            <TouchableOpacity style={{height:20, width:20,alignSelf:'flex-start',}}>
                    <FontAwesomeIcon icon={faArrowLeft}   />
            </TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'bold', fontFamily:'roboto',}}>Pap and Steak</Text>
        </View>
        <View  style={styles.midView}>
             <View style={styles.infoContainer}>

              </View> 
        </View>
        <View  style={styles.bottomView}>

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
        width:deviceWidth-50,
        
      },
      topViewImg:{
        height:220,
        width:deviceWidth,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:100,
        paddingRight:100,
      },
      midView:{
        height:500,
        width:'100%',
      },
      
      infoContainer:{
        backgroundColor:'blue',
        height:50,
        width:'100%',

      },
})

