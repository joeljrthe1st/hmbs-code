
import { FlatList,StyleSheet, Text, View, Button, Image,TouchableOpacity, Touchable } from 'react-native';
// components


export default function Account({navigation}) {
  return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.f}>Dashboard</Text>

    </View>
    <View style={styles.section}>
      <Text>icon scroll</Text>
    </View>
    <View style={styles.body}>
      <Text>body</Text>
    </View>
   </View>
  );
}
const styles = StyleSheet.create({
 container:{
  flex:1,
  flexDirection:'column',
 },
 header:{
flex:0.7,
backgroundColor:'white',
alignItems:'center',
justifyContent:'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
 },
 section:{
  flex:3,
  backgroundColor:'#c3e7e8',
  alignItems:'center',
  borderRadius:20,
  marginTop:5
   },
 body:{
  flex:4,
  backgroundColor:'#9feaed',
  alignItems:'center',
  borderRadius:20,
  marginTop:5
   },
  
});
