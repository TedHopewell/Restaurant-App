import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {collection,doc, deleteDoc,getDocs, query} from 'firebase/firestore'
import { db } from './firebase';


const Orderspage = ({navigation}) => {
  
  const [Carts, setCarts] = React.useState([]);
  const cartRef = collection(db, "cart");  
  

  const getItems = async() => {
    let q = query(cartRef)
    let data = await getDocs(q);
    setCarts(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    
  }
  console.log(Carts);

  

  React.useEffect(()=>{
    getItems();
 
  }

  ,[])


  return (
    <View style={styles.container}>
        <View style={styles.topView}>
        <TouchableOpacity onPress={()=> {navigation.push('home')}} style={{height:20, width:20,alignSelf:'flex-start',paddingLeft:10}}>
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
            {Carts.map((cart) =>(
                <View style={styles.midViewFood} key={cart.id}>
                    <Image source={cart.image} style={{width:50,height:50,alignSelf:'flex-start'}}/>
                    <Text>{cart.description}</Text>
        
                </View>
                ))

                }
                
        </View>
        
       
        <View style={styles.bottomView}>
                <TouchableOpacity><Text>press me</Text></TouchableOpacity>
        </View>
          </View>
  )
}

export default Orderspage

const styles = StyleSheet.create({
    container:{
            flex: 1,
            alignItems: 'center',
            backgroundColor:'rgb(252,246,246)',
    },
    topView:{
        flex:1,
        height:'50px',
        width:'100%',
        
        
    },
    midView:{
        flex:12,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

    },
    bottomView:{
        flex:1,
    
        width:'100%'
    },
    iconicIcon:{
        marginVertical:15,
        marginLeft:20,
        width:20
    },
    midViewFood:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        marginTop:20,
        backgroundColor:'blue'
    }

})