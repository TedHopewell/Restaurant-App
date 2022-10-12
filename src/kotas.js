import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import kota1 from '../assets/Kota1.jpg'
import kota2 from '../assets/kota2.jpg'
import kota3 from '../assets/kota3.jpg'
import kota4 from '../assets/kota4.jpg'
import kota5 from '../assets/kota5.jpg'
import kota6 from '../assets/kota6.jpg'



export default function KotasMenu() {
  return (
    <View>
        <View  style={styles.firstTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={kota1} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic stew beef Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={kota2} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic chicken liver Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.secondTable}>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={kota3} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic Original Kota flavor</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={kota4} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic tasty Kota freestyle</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.thirdTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={kota5} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Original Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={kota6} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>A Classic Kota Monster</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    firstTable:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10,
    },
    secondTable:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10,
    },
    thirdTable:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10,
    },
    mealCards:{
        height:220,
        width:150,
        backgroundColor:'lightgrey',
        borderRadius:20,
    },
    meal1:{
        height:120,
        width:150,
        borderRadius:20,
        paddingRight:80,
    }
})

