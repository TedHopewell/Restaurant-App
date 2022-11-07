import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import dombolo from '../assets/dombolo1.jpg'
import rice from '../assets/rice.jpg'
import Potjiekos from '../assets/Potjiekos.jpg'
import light1 from '../assets/light1.jpg'
import feet from '../assets/feet1.jpg'
import mopani from '../assets/mopani.jpg'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from './firebase';



export default function LightFood() {

    const [foods, setFoods] = React.useState([]);
    const foodRef = collection(db, "Foods")
    console.log('hello');
  
    const getItems = async() => {
      let q = query(foodRef, where('type','==', 'light'))
      let data = await getDocs(q);
      setFoods(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
      console.log(foods);
      
    }
  
    
    
  
    React.useEffect(()=>{
      getItems();
     
    }
  
     ,[]
    )

  return (

    <View  style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {foods.map((food) => (

                <View style={styles.mealCards} key={food.id}>
                    <TouchableOpacity><Image source={Potjiekos} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>{food.description}</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R{food.price}</Text>
                    </TouchableOpacity>

                </View>

            ))}



            {/* <View style={styles.mealCards}>
                    <TouchableOpacity><Image source={rice} style={styles.meal1}></Image></TouchableOpacity>
                    <Text style={{textAlign:'center', paddingTop:10,fontFamily:'roboto',height:30,paddingHorizontal:5,fontSize:12,}}>rice and stew</Text>
                    <TouchableOpacity style={{backgroundColor:'orange', width:120,marginLeft:15,marginTop:20,borderRadius:20,}}>
                        <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>R50.00</Text>
                    </TouchableOpacity>
            </View>
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

