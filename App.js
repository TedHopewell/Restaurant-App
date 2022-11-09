import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/login';
import SignupPage from './src/signup';
import Homepage from './src/homepage';
import CartPage from './src/cartPage';
import Profilepage from './src/profile';
import Directionspage from './src/directions';
import Orderspage from './src/orders';
import Favoritespage from './src/favors';
import Forgot from './src/forgotPassword';
import { Foods } from './src/foods';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer >
            <Stack.Navigator initialRouteName='login'>
                  <Stack.Screen name='signup' options={{title:'signup', headerShown:false}}>
                    {(props)=> <SignupPage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='login' options={{title:'login', headerShown:false}}>
                    {(props)=> <LoginPage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='home' options={{title:'home', headerShown:false}}>
                    {(props)=> <Homepage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='cart' options={{title:'cart', headerShown:false}}>
                    {(props)=> <CartPage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='profile' options={{title:'profile', headerShown:false}}>
                    {(props)=> <Profilepage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='directions' options={{title:'directions', headerShown:false}}>
                    {(props)=> <Directionspage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='orders' options={{title:'orders', headerShown:false}}>
                    {(props)=> <Orderspage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='favors' options={{title:'favors', headerShown:false}}>
                    {(props)=> <Favoritespage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='forgotPassword' options={{title:'forgotPassword', headerShown:false}}>
                    {(props)=> <Forgot {...props} />}
                  </Stack.Screen>
                  {/* <Stack.Screen name='foods' options={{title:'foods', headerShown:false}}>
                    {(props)=> <Foods {...props} />}
                  </Stack.Screen> */}
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
