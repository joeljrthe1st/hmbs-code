
//screens
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import Register from './src/screens/Register';
import Appointment from './src/screens/Appointment';
import Account from './src/screens/Account';

//routes
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator } from './CustomNavigation';
//// nested
import StackRoute from './src/routes/StackRoute';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();
//import Icon from 'react-native-vector-icons/Ionicons';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//const Stack= createStackNavigator();

export default function App() {
   return (
/*<NavigationContainer>  
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FirstScreenNavigator} />
      <Tab.Screen name="Appointment" component={SecondScreenNavigator} />
      <Tab.Screen name="Account" component={ThirdScreenNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
*/
// this is the default tab navigator
/*   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name = "LoginScreen"
      component={LoginScreen}
      />
      <Stack.Screen
      options={{headerShown: false}}
      name = "Home"
      component={Home}
      />
       
      <Stack.Screen
      options={{headerShown: false}}
      name = "Appointment"
      component={Appointment}
      />
        <Stack.Screen
      options={{headerShown: false}}
      name = "Register"
      component={Register}
      />
    </Stack.Navigator>
   </NavigationContainer>
   */
  <NavigationContainer>
      <StackRoute/>
  </NavigationContainer>
  );
}