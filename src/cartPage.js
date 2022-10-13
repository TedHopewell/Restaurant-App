import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import img from '../assets/pap2.jpg'


export default function CartPage() {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Image source={img} style={styles.topViewImg}></Image>
            <Text style={{fontSize:30,fontWeight:'bold', fontFamily:'roboto',paddingTop:20,}}>Pap and Steak</Text>
        </View>
        <View  style={styles.midView}>

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
        height:180,
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
      midView:{flex:12},
})

