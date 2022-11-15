import React, { useReducer } from 'react';
//import react native components
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//styling imports
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/color';
// import categories from '../const/categories';
//firebase imports
import { db } from '../config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs,query,where} from 'firebase/firestore';
import { async } from '@firebase/util';
import { auth } from '../config/firebase';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import BottomNavigator from '../const/bottomNav';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const HomeScreen = ({navigation, route}) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [foods,setFoods]= React.useState([]);
    const [foodName,setFoodName]=React.useState('');
    const [foodIngridients,setFoodIngridients]=React.useState('')
    const [foodPrice,setFoodPrice]=React.useState('')
    const [addCart,setAddCart]=React.useState(false)
    const foodCategory = [];
    const dessertCategory = [];
    const drinksCategory = [];
    const theFoods = [];
    const foodRef =collection(db,"foods");
    const cartRef = collection(db,"cart");
    const user = auth.currentUser;
    console.log(user);
    const signOut = async()=>{
      auth
      .signOut()
      .then(() => console.log('User signed out!'));
      navigation.push('Login')
  }







    const getItems = async()=>{
      console.log(foodRef);
      let data = await getDocs(foodRef);
      const q = query(collection(db, "foods"));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          theFoods.push({id:doc.id , name: doc.data().name,ingridients:doc.data().ingridients, price:doc.data().price,cart:addCart,image:doc.data().image})
      });
       setFoods(theFoods);
      }



      const food = async() =>{
        // console.log(categories)
            const q = query(collection(db, "foods"),where("category","==","food"));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
              console.log(doc.data().name)
              foodCategory.push({name:doc.data().name,price:doc.data().price,ingridients:doc.data().ingridients,image:doc.data().image})
            })
            console.log(foodCategory)
          // }
       setFoods(foodCategory)
     }




     const dessert = async() =>{
          const q = query(collection(db, "foods"),where("category","==","desert"));
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            console.log(doc.data().name)
            dessertCategory.push({name:doc.data().name,price:doc.data().price,ingridients:doc.data().ingridients,image:doc.data().image})
          })
          console.log(dessertCategory)
        // }
     setFoods(dessertCategory)
   }
   const drinks = async() =>{
    // console.log(categories)
        const q = query(collection(db, "foods"),where("category","==","drink"));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          console.log(doc.data().name)
          drinksCategory.push({name:doc.data().name,price:doc.data().price,ingridients:doc.data().ingridients,image:doc.data().image})
        })
        console.log(drinksCategory)
      // }
   setFoods(drinksCategory)
 }
      function some(){
        for (var i=0; i < foods.length; i++){
            if(foods[i].category==="drinks"){
              console.log(foods[i].name)
              setFoodName(foods[i].name)
              setFoodPrice(foods[i].price)
              setFoodIngridients(foods[i].ingridients)
            }
        }
      }
      React.useEffect(()=>{
        console.log("some")
        getItems();
        console.log(getItems());
       }, [])
    const ListCategories = () => {
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.categoriesListContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={food}>
              <View style={{backgroundColor: selectedCategoryIndex  ? COLORS.primary : COLORS.secondary, ...style.categoryBtn, }}>
                <View style={style.categoryBtnImgCon}>
                  <Image source={require('../const/asserts/catergories/burger.png')} style={{height: 35, width: 35, resizeMode: 'cover',borderRadius:20}}/>
                </View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: selectedCategoryIndex ? COLORS.dark: COLORS.primary,}}>
                  food
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={dessert}>
              <View style={{backgroundColor: selectedCategoryIndex  ? COLORS.primary : COLORS.secondary, ...style.categoryBtn, }}>
                <View style={style.categoryBtnImgCon}>
                  <Image source={require('../const/asserts/catergories/dessert.jpg')} style={{height: 35, width: 35, resizeMode: 'cover',borderRadius:20}}/>
                </View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: selectedCategoryIndex ? COLORS.dark: COLORS.primary,}}>
                  Dessert
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={drinks}>
              <View style={{backgroundColor: selectedCategoryIndex  ? COLORS.primary : COLORS.secondary, ...style.categoryBtn, }}>
                <View style={style.categoryBtnImgCon}>
                  <Image source={require('../const/asserts/catergories/drink.jpg')} style={{height: 35, width: 35, resizeMode: 'cover',borderRadius:20}}/>
                </View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: selectedCategoryIndex ? COLORS.dark: COLORS.primary,}}>
                  drink
                </Text>
              </View>
            </TouchableOpacity>
        </ScrollView>
        );
      };
      // style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}
      const Card = () => {
        return(
          <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:10}}>
                {
                  foods.map((food,index)=>((
                        <TouchableHighlight
                        underlayColor={COLORS.white}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('detail',food) }
                        key={index}>
                            <View style={style.card} >
                                <View style={{alignItems: 'center', top: -40}}>
                                  <Image source={food.image} style={{height: 120, width: 120}} />
                                </View>
                                <View style={{marginHorizontal: 20}}>
                                  <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.white}}>{food.name}</Text>
                                  <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
                                    {food.ingridients}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    marginTop: 10,
                                    marginHorizontal: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                  }}>
                                  <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.white}}>
                                    R{food.price}
                                  </Text>
                                  <TouchableOpacity style={style.addToCartBtn} onPress={async() =>
                                      {
                                        await  addDoc(collection(db,"cart"),{foodName:food.name,price:food.price,ingridients:food.ingridients,num:1,image:food.image})
                                        console.log('added')
                                        console.log(food.image)
                                      }
                                    }
                                    >
                                    <Icon name="add" size={20} color={COLORS.dark} />
                                  </TouchableOpacity>
                                </View>
                            </View>
                      </TouchableHighlight>
              )))
            }
        </View>
        )
      }
      return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.dark}}>
            <View style={[style.header,style.shadowProp]}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28, color: COLORS.white}}>Hello,</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10, color: COLORS.white}}>
                        {user.displayName}
                        </Text>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                  <Image
                    source={require('../../assets/icon.png')}
                    style={{height: 50, width: 50, borderRadius: 25}}
                    />
                  <TouchableOpacity style={{paddingLeft:10, paddingTop:15}} onPress={signOut}>
                      <Icon name="logout" size={20} color={COLORS.primary}/>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20,}}>
                <View style={style.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput style={{flex: 1, fontSize: 18}} placeholder="Search for food"/>
                </View>
                <TouchableOpacity style={style.sortBtn} onPress={some}>
                    <Icon name="tune" size={28} color={COLORS.white} />
                </TouchableOpacity>
            </View>
            <View>
                <ListCategories/>
            </View>
            <ScrollView >
              <Card style={{backgroundColor:'purple'}}/>
            </ScrollView>
        </SafeAreaView>
      )
}