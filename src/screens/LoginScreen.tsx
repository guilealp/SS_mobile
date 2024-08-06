import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View,} from "react-native";
import { useEffect } from "react";


function Login():React.JSX.Element{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#93fb9a" barStyle="dark-content"/>
            <ImageBackground source={require('../assents/images/design.png')} style={styles.fundo}>
                <Image source={require('../assents/images/logo.png')} style={styles.logo}/>
                <Text style={styles.login} >LOGIN</Text>
                <TextInput placeholder="Email" style={styles.email} placeholderTextColor={'#49688d'}></TextInput>
                <TextInput placeholder="Password" style={styles.password} placeholderTextColor={'#49688d'}></TextInput>  
                <TouchableOpacity style={styles.inputlogin}><Text >Log in</Text></TouchableOpacity> 
                <TouchableOpacity ><Text style={styles.forgotpassword}>Esqueci a Senha!</Text></TouchableOpacity>     
                 <Text style={styles.conta}>Não Tem Conta?</Text>      
                <TouchableOpacity style={styles.criar} onPress={navigation.navigate('cadastro')}><Text style={styles.textalign}>Criar</Text></TouchableOpacity>     
                       
                       
                       
                       
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
        width:230,
        position:'absolute',
        left:85,
        borderRadius:80,
        top:470,
        alignItems:'center'

    },
    forgotpassword:{
        color:'#49688d',
        position:'relative',
        top:160,
        left:150
    },
    conta:{
        color:'#49688d',
        position:'absolute',
        top:570,
        left:150
    },
    criar:{
        padding:15,
        backgroundColor:'white',
        width:180,
        position:'absolute',
        top:600,
        left:114,
        borderRadius:80,
        textAlign:'center'
    },
    textalign:{
        textAlign:'center'
    }
}
);
export default Login;