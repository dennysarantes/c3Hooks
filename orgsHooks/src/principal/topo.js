import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from './../assets/logo.png'
import { ServicosMocks } from "../share/mocks";
import { IconButton } from 'react-native-paper';

export default function Topo(){
    const [textos, setTextos] = useState(null);
    
    React.useEffect(() => {
        console.log('Componente montado');
        atualizaTextos();
    }, [])


    atualizaTextos = () =>  {
        setTextos(ServicosMocks.getTextos());
    }


    return <View style={estilo.topo}>
            <View style={estilo.imgContainer}>
                <Image style={estilo.imagem} source={logo}/>
                <IconButton style={estilo.btn} icon="refresh" onPress={() => atualizaTextos()}></IconButton>
            </View>
            <Text style={estilo.boasVindas}>{textos?.boasVindas}</Text>
            <Text style={estilo.legenda}>{textos?.legenda}</Text>
        </View> 



}

const estilo = StyleSheet.create({
    topo: {
        backgroundColor: '#ececec',
        padding: 16,
    },
    imagem: {
        marginTop:'10%',
        width: 100,
        height: 40,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    },
    imgContainer : {
        flexDirection:'row',
        alignItems:'center'
    },
    btn: {
        marginTop:'12%'

        //paddingBottom: ,
        //width: 3,
        //height: 0,
        //alignSelf:'flex-end'
    
    }
})