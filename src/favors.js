import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const Favoritespage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.topView}>
        <TouchableOpacity onPress={() => {navigation.goBack();}} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
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
            <Text>Favorites page here</Text>

        </View>
        <View style={styles.bottomView}>

        </View>
          </View>
  )
}

export default Favoritespage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    topView:{
        flex:1,
        height:'50px',
        width:'100%',
        backgroundColor:'blue',
        
    },
    midView:{
        flex:12,
        width:'100%',
        backgroundColor:'rgb(203,210,143)',
        justifyContent:'center',
        alignItems:'center',

    },
    bottomView:{
        flex:1,
        backgroundColor:'orange',
        width:'100%'
    },
    iconicIcon:{
        marginVertical:15,
        marginLeft:20,
        width:20
    },

})