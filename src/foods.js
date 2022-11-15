import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import pap from '../assets/pap2.jpg'
import chicken from '../assets/chicken.jpg'
import chicken2 from '../assets/chicken2.jpg'
import nama from '../assets/nama2.jpg'
import mabele from '../assets/mabele.jpg'
import samp from '../assets/samp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from './firebase';
import { async } from '@firebase/util';



export default function Foods() {
    
  const [foods, setFoods] = React.useState([]);
  const foodRef = collection(db, "Foods")
  console.log('hello');

  const getItems = async() => {
    let q = query(foodRef, where('type','==', 'heavy'))
    let data = await getDocs(q);
    setFoods(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    console.log(foods);
    
  }

  
  

  React.useEffect(()=>{
    getItems();
    // StatusBar.setBarStyle('light-content', true)
   
  }

  ,[])

  return (
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            
            {foods.map((food) => (
                <View style={styles.mealCards} key={food.id} >
                <TouchableOpacity><Image source={food.image} style={styles.meal1}></Image></TouchableOpacity>
            <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>
                {food.description}
            </Text>
            <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>
                    R{food.price}
                </Text>
            </TouchableOpacity>
        
        </View>
            
            
        ))}
        
            
            {/* <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={chicken} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>A classing pap and hardbody</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
                    
            </View>
        
        
            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={chicken2} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Our very own special chicken dust</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R100.00</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.mealCards}>
                <TouchableOpacity><Image source={nama} style={styles.meal1}></Image></TouchableOpacity>
                <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>pap and lamb traditionally cooked</Text>
                <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                    <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R80.00</Text>
                </TouchableOpacity>
                
            </View>
        
        
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={mabele} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>A classic Mabele and beef stew</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
                   
            </View>
            <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={samp} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>Our special samp and stew traditionally cooked</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R60.00</Text>
                    </TouchableOpacity>
                    
            </View> */}
        
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    mealCards:{
        height:220,
        width:150,
        backgroundColor:'rgb(203,210,143)',
        borderRadius:20,
        marginTop:10
    },
    meal1:{
        height:120,
        width:150,
        borderRadius:20,
        paddingRight:80,
    }
})

