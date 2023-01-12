
import React from "react";
import { StyleSheet,Text, View  } from "react-native";


const NestedScreen =({route})=>{
    return(
        <View>
            <Text style={styles.txt}>{route.params.msg}</Text>
        </View>
    )
}

export default NestedScreen
const styles = StyleSheet.create({
txt:{
    flex:1,
    color:"green",
    backgroundColor:"yellow",
}
})
