import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profilepage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
        <TouchableOpacity onPress={()=> {navigation.goBack();}} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
                    {/* <FontAwesomeIcon icon={faArrowLeft}  /> */}
                    <Icon 
                        style={styles.iconicIcon}
                        size='30'
                        name='arrow-left'
                        type='ionicons'
                        color='black'
                        
                    />
        </TouchableOpacity>

        </View>
        <View style={styles.midView}>
            <View style={{backgroundColor:'white',height:150,width:150,marginTop:-50,borderRadius:100}}>

            </View>
            <Text style={{color:'grey',paddingTop:20}}>25, Male</Text>

            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:40}}>

            </View>
            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:20}}>

            </View>

            <View style={{shadowOpacity:4,width:300,height:50,backgroundColor:'white',marginTop:20}}>

            </View>


        </View>
        <View style={styles.bottomView}>

        </View>
          </View>
  )
}

export default Profilepage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    topView:{
        flex:4,
        width:'100%',
        backgroundColor:'orange',
        
    },
    midView:{
        flex:12,
        width:'100%',
        alignItems:'center',

    },
    bottomView:{
        flex:2,
        backgroundColor:'orange',
        width:'100%'
    },
    iconicIcon:{
        marginVertical:15,
        marginLeft:20,
        width:20
    },

})