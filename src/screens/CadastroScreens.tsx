import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";

function Cadastro():React.JSX.Element{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#93fb9a'
    }
})
export default Cadastro;