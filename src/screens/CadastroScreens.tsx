import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

function Cadastro():React.JSX.Element{
    const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
             <ImageBackground source={require('../assents/images/design.png')} style={styles.fundo}>
             <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../assents/images/logo.png')} style={styles.logo}/>
                <Text style={styles.cadastro}>Cadastro</Text>
                <TextInput placeholder="nome" style={styles.text1}/>
                <TextInput placeholder="celular"style={styles.text}/>
                <TextInput placeholder="email"style={styles.text}/>
                <TextInput placeholder="cpf"style={styles.text}/>
                <TextInput placeholder="data de nacimento"style={styles.text}/>
                <TextInput placeholder="cidade"style={styles.text}/>
                <TextInput placeholder="estado"style={styles.text}/>
                <TextInput placeholder="pais"style={styles.text}/>
                <TextInput placeholder="rua"style={styles.text}/>
                <TextInput placeholder="bairro"style={styles.text}/>
                <TextInput placeholder="cep"style={styles.text}/>
                <TextInput placeholder="password"style={styles.text}/>
                <TouchableOpacity><Text>Cadastrar</Text></TouchableOpacity>
                <TouchableOpacity onPress={navigation.navigate('login')}><Text>login</Text></TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    },
    fundo:{
        flex:1,
        justifyContent:'center', 
    },
    logo:{
        position:"absolute",
        top:10,
        left:95
    },
    cadastro:{
        fontSize:40,
        position:'absolute',
        left:115,
        top:190,
        color:'#49688d'
    },
    text1:{
        marginHorizontal:80,
        marginTop:250,
        borderWidth:1,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        width:230,
        borderTopColor:'#93fb9a',
        borderLeftColor:'#93fb9a',
        borderRightColor:'#93fb9a',
        borderBottomColor:'#49688d'
    },
    text:{
        marginHorizontal:80,
        borderWidth:1,
        marginTop:12,
        width:230,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderTopColor:'#93fb9a',
        borderLeftColor:'#93fb9a',
        borderRightColor:'#93fb9a',
        borderBottomColor:'#49688d'
    }

})
export default Cadastro;