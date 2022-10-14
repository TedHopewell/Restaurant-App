import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import firstKota from '../assets/Kota1.jpg'
import secondKota from '../assets/kota2.jpg'
import thirdKota from '../assets/kota3.jpg'
import fourthKota from '../assets/kota4.jpg'
import fifthKota from '../assets/kota5.jpg'
import sixthKota from '../assets/kota6.jpg'



export default function KotasMenu() {
  return (
    <View>
        <View  style={styles.firstTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={firstKota} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic stew beef Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={secondKota} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic chicken liver Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.secondTable}>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={thirdKota} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic Original Kota flavor</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={fourthKota} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Classic tasty Kota freestyle</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.thirdTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={fifthKota} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Original Kota</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={sixthKota} style={styles.meal1}></Image></TouchableOpacity>
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
        backgroundColor:'rgb(203,210,143)',
        borderRadius:20,
    },
    meal1:{
        height:120,
        width:150,
        borderRadius:20,
        paddingRight:80,
    }
})

