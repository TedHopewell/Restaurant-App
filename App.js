import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/login';
import SignupPage from './src/signup';



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer >
            <Stack.Navigator initialRouteName='LoginPage'>
                  <Stack.Screen name='signup' options={{title:'signup', headerShown:false}}>
                    {(props)=> <SignupPage {...props} />}
                  </Stack.Screen>
                  <Stack.Screen name='login' options={{title:'login', headerShown:false}}>
                    {(props)=> <LoginPage {...props} />}
                  </Stack.Screen>
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
