import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import pap from '../assets/pap2.jpg'
import chicken from '../assets/chicken.jpg'
import chicken2 from '../assets/chicken2.jpg'
import nama from '../assets/nama2.jpg'
import mabele from '../assets/mabele.jpg'
import samp from '../assets/samp.jpg'



export default function Foods() {
  return (
    <View>
        <View  style={styles.firstTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={pap} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>A classic kasi flavor steak and pap</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R80.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={chicken} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>A classing pap and hardbody</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.secondTable}>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={chicken2} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>Our very own special chicken dust</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R100.00</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={nama} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>pap and lamb traditionally cooked</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R80.00</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.thirdTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={mabele} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>A classic Mabele and beef stew</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={samp} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,}}>Our special samp and stew traditionally cooked</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
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
        backgroundColor:'white',
        borderRadius:20,
    },
    meal1:{
        height:120,
        width:150,
        borderRadius:20,
        paddingRight:80,
    }
})

