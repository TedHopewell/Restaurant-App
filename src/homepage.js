
import React from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/img.jpeg'
import image2 from '../assets/nyama1.jpg'
import image3 from '../assets/mabele.jpg'
import image4 from '../assets/rice.jpg'
import image5 from '../assets/kota1.jpg'
import Foods from './foods';
import LightFood from './lightFood';
import KotasMenu from './kotas';
import ConfirmationPopup from './modal';


import { auth } from './firebase';

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


export default function Homepage({navigation}) {
  
  const [visible, setVisible] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showLight, setShowLight] = React.useState(false);
  const [showKota, setShowKota] = React.useState(false);
  const categories=[
                    'Heavy Meals','Light Meals', 'Kota Menu'
                   ];

  const [currentSelectedIndex, setCurrentSelectedIndex]= React.useState(0)
  const CategoryList=()=>{
    return(
      <View style={styles.categoryContainer}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} onPress={()=>setCurrentSelectedIndex(index)}>
            <Text style={[styles.categoryText , currentSelectedIndex== index && styles.categoryTextSelected]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  let user = auth.currentUser;
  const signOut = async()=>{
    auth
    .signOut()
    .then(() => console.log('User signed out!'));
    navigation.push('login')
    setVisible(false);
    
}
const close = () =>{
    setVisible(false)
};

const confirmSignOut = async()=>{
    setVisible(true);
}

  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.topView}>
                
                        <Text style=
                            {{color:'black', 
                              fontSize:20,
                              paddingTop:28,
                              paddingLeft:20
                              }}
                              >
                                Welcome,
                        </Text>
                                <Text style=
                                    {{color:'black',
                                      fontSize:16,
                                      paddingTop:33,
                                      fontWeight:'bold',
                                      
                                      }}
                                      >
                                        {user.displayName}
                                </Text>
                <TouchableOpacity  onPress={()=> {navigation.push('profile')}}><Image source={image1} style={styles.profilePic}></Image></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={confirmSignOut} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
                    {/* <FontAwesomeIcon icon={faArrowLeft}  /> */}
                    <Icon 
                        style={styles.iconicIcon}
                        size='30'
                        name='arrow-left'
                        type='ionicons'
                        color='black'
                        
                    />
        </TouchableOpacity>
        <View>
          <ConfirmationPopup visible={visible}>
            {/* <Image
              source={modalImage}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            /> */}
            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              You are about to be signed out, Do you want to continue?
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{backgroundColor:'rgb(203,210,143)',width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center'}} onPress={() => close()}>
                <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "orange",width:80,height:30,borderRadius:20,textAlign:'center',justifyContent:'center'}} onPress={() => signOut()}>
                <Text>Logout</Text>
                </TouchableOpacity>
            </View>    
          </ConfirmationPopup>
        </View>

        <ScrollView style={styles.midView} showsVerticalScrollIndicator={false}>
                <View style={styles.special}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoText}>Get our super combo at Combo Mondays to enjoy our special meat monster</Text>
                        <TouchableOpacity onPress={()=> {navigation.push('cart')}} style={styles.promoBtn}>
                            <Text>Order here..</Text>
                        </TouchableOpacity>
                    </View>
                        <Image source={image2} style={styles.adImage}></Image>
                </View>
                <Text style={styles.searchBoxContainer}>
                    <TouchableOpacity>
                        {/* <FontAwesomeIcon icon={faSearch} style={{paddingLeft:5,color:'black',paddingTop:5}} /> */}
                        <Icon
                            style={styles.iconicIcon2}
                            size='30'
                            name='search'
                            type='ionicons'
                            color='black'
                            
                         />
                    </TouchableOpacity>
                    <TextInput style={styles.srchBox} placeholder='Search for food' />
                </Text>
                <View style={styles.menuView}>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShow(!show)} >
                            <Image source={image3}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'black'}}>{categories[0]}</Text>
                        
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShowLight(!showLight)}>
                            <Image source={image4}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'black'}}>{categories[1]}</Text>
                    </View>
                    <View style={styles.menuTypes}>
                        <TouchableOpacity onPress={() => setShowKota(!showKota)}>
                            <Image source={image5}  style={styles.foodTypes}/>
                        </TouchableOpacity>
                        <Text style={{color:'black'}}>{categories[2]}</Text>
                    </View>
                       {/* <CategoryList />   */}
                </View>
                
                
                <View style={styles.menuList}>
                    {show && <ContentComp />}
                    {showLight && <Content />}
                    {showKota && <ContentKotas />}
                </View>
            
        </ScrollView>
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=> {navigation.push('home')}}>
                <FontAwesomeIcon icon={faHome} style={{fontSize:30,paddingTop:15, height:20, width:30,color:'orange'}} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> {navigation.push('favors')}}>
                <FontAwesomeIcon icon={faHeart} style={{fontSize:30,paddingTop:15, height:20, width:30,color:'orange'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {navigation.push('orders')}} style={{backgroundColor:'orange', width:30,height:30,marginTop:10,borderRadius:50}}>
                <FontAwesomeIcon icon={faBriefcase} style={{fontSize:30, height:20, width:30,marginTop:5, }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {navigation.push('directions')}}>
                <FontAwesomeIcon icon={faDirections} style={{fontSize:30,paddingTop:15, height:20, width:30,color:'orange'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {navigation.push('profile')}}>
                <FontAwesomeIcon icon={faUser} style={{fontSize:30,paddingTop:15, height:20, width:30,color:'orange'}} />
            </TouchableOpacity>
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
      backgroundColor:'rgb(252,246,246)',
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
        marginTop:20,
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
        backgroundColor:'rgb(203,210,143)'
        
    },
    srchBox:{
        height:25,
        width:deviceWidth-110,
        borderRadius:8,
        paddingHorizontal:20,
        fontSize:12,
        color:'black',
    },
    special:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:deviceWidth-60,
        height:150,
        backgroundColor:'rgb(203,210,143)',
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
        backgroundColor:'orange',
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
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    iconicIcon:{
        marginLeft:20,
        width:20
    },
    iconicIcon2:{
        marginLeft:5,
        width:20
    },

    categoryContainer:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-between'
      },
      categoryText:{
        fontSize:16,
        color:'grey',
        fontWeight:'bold'
      },
      categoryTextSelected:{
        color:'white',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'blue'
      },
   
})
