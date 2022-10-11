
import React from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import image1 from '../assets/img.jpeg'
import image2 from '../assets/nyama1.jpg'
import image3 from '../assets/mabele.jpg'
import image4 from '../assets/rice.jpg'
import image5 from '../assets/kota1.jpg'
import pap from '../assets/pap2.jpg'
import chicken from '../assets/chicken.jpg'
import chicken2 from '../assets/chicken2.jpg'
import nama from '../assets/nama2.jpg'
import mabele from '../assets/mabele.jpg'
import samp from '../assets/samp.jpg'



export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
                <Text></Text>
                <Image source={image1} style={styles.profilePic}></Image>
        </View>
        
        <ScrollView style={styles.midView}>
                <View style={styles.special}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoText}>Get our super combo at a very low price promo ends month end</Text>
                        <TouchableOpacity style={styles.promoBtn}>
                            <Text>Order here..</Text>
                        </TouchableOpacity>
                    </View>
                        <Image source={image2} style={styles.adImage}></Image>
                </View>
                <Text>
                <TextInput style={styles.srchBox} placeholder='Search for food' />
                </Text>
                <View style={styles.menuView}>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity>
                            <Image source={image3}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text>Heavy Meals</Text>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity>
                            <Image source={image4}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text>Light Meals</Text>
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity>
                            <Image source={image5}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text>Kota Menu</Text>
                    </View>
                    
                </View>
                
                <View style={styles.menuList}>
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

        </ScrollView>
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="orange" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,202.7C672,160,768,96,864,85.3C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        
    </SafeAreaView>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
    },
    topView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'orange',
        height:80,
        width:'100%',
    },
    profilePic:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:5,
        marginRight:10,
        alignSelf:'center',
    },
    srchBox:{
        border:'2px solid orange',
        height:45,
        width:deviceWidth-70,
        marginLeft:10,
        borderRadius:8,
        paddingHorizontal:20,
        fontSize:12,
    },
    special:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:deviceWidth-60,
        height:150,
        backgroundColor:'orange',
        marginVertical:20,
        borderRadius:20,
    },
    adImage:{
        height:150,
        alignSelf:'flex-end',
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        borderRadius:50,
        paddingRight:150,
    },
    promoTextContainer:{
        display:'flex',
        flexDirection:'column',
        width:165,
    },
    promoText:{
        paddingHorizontal:20,
        paddingVertical:20,
        fontFamily:'pacifico'
    },
    promoBtn:{
        backgroundColor:'#ffffff',
        width:90,
        height:30,
        marginHorizontal:20,
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:20,
        
    },
    menuView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:deviceWidth-50,
        marginTop:20,
    },
    foodTypes:{
        width:50,
        height:50,
        borderRadius:50,
        alignSelf:'center',
    },
    menuTypes:{
        textAlign:'center',
        width:80,
    },
    line:{
        width:50,
        height:5,
        backgroundColor:'orange',
        alignSelf:'center',
        borderRadius:5,
        marginTop:5,
    },
    menuList:{
       
        height:400,
        width:deviceWidth-50,
        marginTop:20,
    },
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
