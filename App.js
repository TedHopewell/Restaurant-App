import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/login';
import SignupPage from './src/signup';
import Homepage from './src/homepage';
import CartPage from './src/cartPage';



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
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
