
import { FlatList,StyleSheet, Text, View, Image,TouchableOpacity, Touchable } from 'react-native';
import { useState } from 'react';
// components
import Av from '../SubComponents/Avatar';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from 'react-native-paper';


//import { createDrawerNavigator } from '@react-navigation/drawer';
export default function Home({navigation}) {
  const [services,setServices]= useState([

    {name:'Lukwago Joel', speciality:'Psychiatrist', rating:5, shift:'Part-time',profilePic:{ uri: 'https://picsum.photos/600' },key:1},
    {name:'Matua Elvis Lico', speciality:'Gynecologist', rating:5, shift:'full-time',profilePic:{ uri: 'https://picsum.photos/901' },key:2},
    {name:'Nakayima Priscilla', speciality:'Dentist', rating:5, shift:'full-time',profilePic:{ uri: 'https://picsum.photos/802' },key:3},
    {name:'Anne', speciality:'Neurologist', rating:5, shift:'Part-time',profilePic:{ uri: 'https://picsum.photos/103' },key:4},
    {name:'mark', speciality:'butt', rating:5, shift:'full-time',profilePic:{ uri: 'https://picsum.photos/203' },key:5},
    {name:'Sarah', speciality:'Dentist', rating:5, shift:'full-time',profilePic:{ uri: 'https://picsum.photos/303' },key:6},
    {name:'Daphine', speciality:'leg', rating:5, shift:'full-time',profilePic:{ uri: 'https://picsum.photos/403' },key:7}
  ]);
  return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.dash}>Dashboard</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Account')} >
  <Avatar.Image  size={35} source={require('C:/hmbs/finalhmbs/assets/joel.png')} style={{marginLeft:180,marginTop:-50}} />
  </TouchableOpacity>
    
    </View>
   
    <View style={styles.body}>
      
    <View>
      <FlatList
        data={services}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.doc} onPress={()=>navigation.navigate('Booking',item)}>
            <Image source={(item.profilePic)} style={{width: 90, height: 90, borderRadius:100}}/>
            <View style={{marginLeft:9, backgroundColor:"white"}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>{item.name} </Text>
            <Text style={{fontSize:15,opacity:.5}}>{item.speciality}</Text>
            <Text style={{fontSize:15,color:'#5f91e3'}}>{item.shift}</Text>
            {/* <Text>{item.rating}</Text> */}
            
            <Ionicons name='star-half-outline'size={20} style={{color:'tomato',}}></Ionicons>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
     
    </View>
    
   </View>
   
  );
}
const styles = StyleSheet.create({
 container:{
  flex:1,
  flexDirection:'column',
  backgroundColor:'white',
  
 },
 header:{
flex:1,
flexDirection:'row',
alignItems:'space-between',
backgroundColor:'white',
//alignItems:'center',
justifyContent:'center',
shadowColor: "#000",
borderBottomLeftRadius:30,
borderBottomRightRadius:30,

shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
 },
 dash:{
  margin: 5,
  fontSize:25,
  
 },
 body:{
  flex:5,
  backgroundColor:'white',
  alignItems:'center',
  marginTop:13,
  
  
   },
   btn1:{
    backgroundColor:"#e0166e",
    padding:10,
    width:200,
    borderRadius:25,
    marginTop: 12

  },
  btn1txt:{
    color:"white",
    textAlign:"center",
  },
  doc:{
    flexDirection:'row',
    padding:5,
    backgroundColor:'white',
    width:390,
    margin:5,
    borderRadius:15,
    alignItems:'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
     
  }
});
