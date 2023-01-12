/// image links https://www.wallpapersun.com/wp-content/uploads/2021/10/Medical-Wallpaper-13.jpg
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {
   //const localImage= require("");
   const image = { uri: "https://www.wallpapersun.com/wp-content/uploads/2021/10/Medical-Wallpaper-15-715x1271.jpg" };
    
  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
       <View style={styles.content}>
       <TextInput
       placeholder="First Name"
       //value=""
       //onChange={}
       style={styles.input}
       />
       <TextInput
       placeholder="Last Name"
       //value=""
       //onChange={}
       style={styles.input}
       />
       <TextInput
       placeholder="Email"
       //value=""
       //onChange={}
       style={styles.input}
       />
       <TextInput
       placeholder="Password"
        //value=""
       //onChange={}
       style={styles.input}
       />
       <TextInput
       placeholder="Confirm Password"
        //value=""
       //onChange={}
       style={styles.input}
       />
       <View style={styles.btn}>

        
        <TouchableOpacity style={styles.btn2}><Text style={styles.btn2txt} onPress={()=>navigation.navigate('LoginScreen')}>Register</Text></TouchableOpacity>
       </View>
       </View>
       </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center"
      
    },
    input:{
      width:"80%",
      paddingHorizontal:15,
      paddingVertical:10,
      marginTop:10,
      backgroundColor:"white",
      borderRadius:20

    },
    btn1:{
      backgroundColor:"#00FFFF",
      padding:10,
      width:200,
      borderRadius:25,
      marginTop: 12

    },
    btn2:{
      backgroundColor:"white",
      padding:10,
      width:200,
      borderRadius:25,
      marginTop: 12,
      borderColor:"#00FFFF",
      borderWidth:1
    },
    btn1txt:{
      color:"white",
      textAlign:"center",
    },
    btn2txt:{
      color:"#00FFFF",
      textAlign:"center",
      
    }, 
    content:{

      justifyContent:"center",
      alignItems:"center"
    }

  });
  