
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import NestedScreen from "./src/screens/NestedScreen";
import Appointment from "./src/screens/Appointment";
import Account from "./src/screens/Account";
import Home from "./src/screens/Home";
import LoginScreen from "./src/screens/LoginScreen";
import Register from "./src/screens/Register";

//import Account from "./src/screens/Account";
//import Appointment from "./src/screens/Appointment";
//import NestedScreen from "./src/screens/NestedScreen";

 const Stack= createStackNavigator();

 const FirstScreenNavigator =()=>{
    return (
        <Stack.Navigator>
        
        <Stack.Screen
       options={{headerShown: false}}
       name = "Home"
       component={Home}
       />
       <Stack.Screen
             options={{headerShown: false}}
             name = "LoginScreen"
             component={LoginScreen}
            />
       
       <Stack.Screen
       options={{headerShown: false}}
       name = "NestedScreen"
       component={NestedScreen}
       />
     </Stack.Navigator>
        
    )
 }
 export {FirstScreenNavigator}

 ///////scd screen 
 const SecondScreenNavigator =()=>{
    return (
        <Stack.Navigator>
        <Stack.Screen
             options={{headerShown: false}}
             name = "Appointment"
             component={Appointment}
            />
       <Stack.Screen
       options={{headerShown: false}}
       name = "NestedScreen"
       component={NestedScreen}
       />
     </Stack.Navigator>
        
    )
 }
 export {SecondScreenNavigator}

 ////3rd screen
 const ThirdScreenNavigator =()=>{
    return (
        <Stack.Navigator>
        <Stack.Screen
             options={{headerShown: false}}
             name = "Account"
             component={Account}
            />

       
       <Stack.Screen
       options={{headerShown: false}}
       name = "NestedScreen"
       component={NestedScreen}
       />
        <Stack.Screen
       options={{headerShown: false}}
       name = "Register"
       component={Register}
       />
     </Stack.Navigator>
        
    )
 }
 export {ThirdScreenNavigator}