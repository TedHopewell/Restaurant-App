import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import img from '../assets/pap2.jpg'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';


export default function CartPage({navigation, route}) {
  const food = route.params;
  const addToCart = async() =>{
    await  addDoc(collection(db,"cart"),{image:food.image,description:food.description,price:food.price,ingredients:food.ingredients})
    console.log('added');
  }
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Image source={food.image} style={styles.topViewImg}></Image>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={{height:20, width:20,alignSelf:'flex-start',marginLeft:20}}>
                    <FontAwesomeIcon icon={faArrowLeft}  />
            </TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'bold', fontFamily:'roboto',paddingLeft:20,marginTop:20,color:'grey'}}>{food.description}</Text>
        </View>
        <View  style={styles.midView}>
             <View style={styles.infoContainer}>
                    <Text style={{paddingTop:20,fontSize:30,fontWeight:'bold',fontFamily:'roboto',color:'grey'}}>Ingredients</Text>
                    <Text style={{marginTop:20,backgroundColor:'rgb(203,210,143)',padding:10,textAlign:'center'}}>{food.ingredients}</Text>
              </View> 
        </View>
                            <TouchableOpacity 
                                onPress={addToCart}
                                style={{
                                    backgroundColor:'orange', 
                                    width:120,
                                    marginLeft:15,
                                    borderRadius:20,}}
                                >
                                <Text style={{textAlign:'center', fontFamily:'roboto',paddingVertical:8,fontWeight:'800'}}>
                                    R{food.price}
                                </Text>
                            </TouchableOpacity>
        <View  style={styles.bottomView}></View>

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
        //backgroundColor:'orange',
        height:50,
        width:'100%',
        padding:20,
        

      },
      bottomView:{
      
        height:50,
        width:'100%',
        
      }
})

