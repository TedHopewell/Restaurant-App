import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import dombolo from '../assets/dombolo1.jpg'
import rice from '../assets/rice.jpg'
import Potjiekos from '../assets/Potjiekos.jpg'
import light1 from '../assets/light1.jpg'
import feet from '../assets/feet1.jpg'
import mopani from '../assets/mopani.jpg'



export default function LightFood() {
  return (
    <View>
        <View  style={styles.firstTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={dombolo} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>dombolo and stew </Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={rice} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>rice and stew</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R50.00</Text>
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.secondTable}>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={Potjiekos} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Potato monate</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R50.00</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={light1} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>chicken and salads</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R40.00</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.thirdTable}>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={feet} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>A classic chicken feet freestyle</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={mopani} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>A classic Masonja special</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R30.00</Text>
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

