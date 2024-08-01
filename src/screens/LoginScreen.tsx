import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import { useEffect } from "react";


function Login():React.JSX.Element{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assents/images/design.png')} style={styles.fundo}>
                <Image source={require('../assents/images/logo.png')} style={styles.logo}/>
                <Text style={styles.login} >LOGIN</Text>
                <TextInput placeholder="Email" style={styles.email} placeholderTextColor={'#49688d'}></TextInput>
                <TextInput placeholder="Password" style={styles.password} placeholderTextColor={'#49688d'}></TextInput>  
                <TouchableOpacity style={styles.inputlogin}><Text >Log in</Text></TouchableOpacity>      
                       
                       
                       
                       
                       
                       
            </ImageBackground>

        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        
    },
    logo:{
        position:'absolute',
        left:100,
        top:50
    },
    fundo:{
        flex:1,
        justifyContent:'center',
        
    },
    login:{
        fontSize:40,
        position:'absolute',
        left:143,
        top:220,
        color:'#49688d'
    },
    email:{
        position:'absolute',
        left:85,
        top:300,
        borderWidth:1,
        width:230,
        borderTopColor:'#93fb9a',
        borderLeftColor:'#93fb9a',
        borderRightColor:'#93fb9a',
        borderBottomColor:'#49688d'
    },
    textcolor:{
        color:'#49688d'
    },
    password:{
        position:'absolute',
        top:370,
        left:85,
        borderWidth:1,
        width:230,
        borderTopColor:'#93fb9a',
        borderLeftColor:'#93fb9a',
        borderRightColor:'#93fb9a',
        borderBottomColor:'#49688d'
    },
    inputlogin:{
        padding:15,
        backgroundColor:'white',
        borderWidth:1,
        width:230,
        position:'absolute',
        left:85,
        borderRadius:20,
        top:470,
        alignItems:'center'

    }
})
export default Login;