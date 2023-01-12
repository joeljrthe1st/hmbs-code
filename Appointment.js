import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Appointment({navigation, route}) {
  return (
   <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1:{
    backgroundColor:"#00FFFF",
    padding:10,
    width:200,
    borderRadius:25,
    marginTop: 12
  },
  btn1txt:{
    color:"white",
    textAlign:"center",
  },
});
