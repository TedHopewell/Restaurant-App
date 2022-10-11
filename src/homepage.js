
import React from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/img.jpeg'
import image2 from '../assets/nyama1.jpg'
import image3 from '../assets/mabele.jpg'
import image4 from '../assets/rice.jpg'
import image5 from '../assets/kota1.jpg'
import Foods from './foods';
import LightFood from './lightFood';
import KotasMenu from './kotas';

const ContentComp = () => {
    return(
        <Foods />
    )
}
const Content = () => {
    return(
        <LightFood />
    )
}
const ContentKotas = () => {
    return(
        <KotasMenu />
    )
}


export default function Homepage() {

  const [show, setShow] = React.useState(false);
  const [showLight, setShowLight] = React.useState(false);
  const [showKota, setShowKota] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
                <Text style={{color:'white', fontSize:30,paddingTop:18, paddingLeft:20}}>Welcome,</Text><Text style={{color:'white', fontSize:30,paddingTop:18,fontWeight:'bold',marginRight:10,}}>Hopewell</Text>
                <Image source={image1} style={styles.profilePic}></Image>
        </View>
        
        <ScrollView style={styles.midView} showsVerticalScrollIndicator={false}>
                <View style={styles.special}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoText}>Get our super combo at Combo Mondays to enjoy our special meat monster</Text>
                        <TouchableOpacity style={styles.promoBtn}>
                            <Text>Order here..</Text>
                        </TouchableOpacity>
                    </View>
                        <Image source={image2} style={styles.adImage}></Image>
                </View>
                <Text style={styles.searchBoxContainer}>
                    <TouchableOpacity><FontAwesomeIcon icon={faSearch} style={{paddingLeft:5,color:'white'}} /></TouchableOpacity>
                    <TextInput style={styles.srchBox} placeholder='Search for food' />
                </Text>
                <View style={styles.menuView}>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShow(!show)} >
                            <Image source={image3}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>Heavy Meals</Text>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShowLight(!showLight)}>
                            <Image source={image4}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>Light Meals</Text>
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShowKota(!showKota)}>
                            <Image source={image5}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>Kota Menu</Text>
                    </View>
                    
                </View>
                
                <View style={styles.menuList}>
                    {show && <ContentComp />}
                    {showLight && <Content />}
                    {showKota && <ContentKotas />}
                </View>

        </ScrollView>
        <View style={styles.bottomView}>
            <TouchableOpacity><FontAwesomeIcon icon={faBars} style={{fontSize:30,alignSelf:'center',paddingTop:20}} /></TouchableOpacity>
        </View>
        
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
      backgroundColor:'black',
    },
    topView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:80,
        width:'100%',
    },
    profilePic:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:5,
        marginRight:20,
        alignSelf:'center',
    },
    searchBoxContainer:{
        border:'2px solid orange',
        height:45,
        flexDirection:'row',
        paddingTop:5,
        borderRadius:8,
        width:deviceWidth-70,
        marginLeft:10,
        
    },
    srchBox:{
        height:25,
        width:deviceWidth-110,
        marginLeft:10,
        borderRadius:8,
        paddingHorizontal:20,
        fontSize:12,
        color:'white',
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
    bottomView:{
        height:50,
        width:'100%',
        backgroundColor:'white',
    }
   
})
