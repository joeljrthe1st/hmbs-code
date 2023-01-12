
import { FlatList,StyleSheet, Text, View, Button, Image,TouchableOpacity, Touchable } from 'react-native';
import { Avatar,  Card, } from 'react-native-paper';
// components

export default function Booking({navigation, route}) {
  return (
   <View style={styles.container}>
    <Card>
    <Card.Cover source={route.params.profilePic} style={{width: 200, height: 200, borderRadius:100, marginLeft:80,margin:10}}  />
    <Card.Title title={route.params.name} subtitle={route.params.speciality}  />
    <Card.Content>
      <Text variant="titleLarge"></Text>
      <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
    </Card.Content>
    
    <Card.Actions>
    
    </Card.Actions>
  </Card>
  <TouchableOpacity style={styles.btn1}><Text style={styles.btn1txt} onPress={()=>navigation.navigate('Home')}>Book appointment now</Text></TouchableOpacity>
   </View>
  );
}
const styles = StyleSheet.create({
 container:{
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#c3e7e8'
 },
 btn1:{
  backgroundColor:"#00FFFF",
  padding:10,
  width:200,
  borderRadius:25,
  marginTop: 12

},
});

