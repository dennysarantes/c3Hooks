/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';

import TelaPrincipal from './src/principal/paginaInicial';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={estilo.tela} >
           <TelaPrincipal></TelaPrincipal>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  tela: {
    flex: 1
  }
})

export default App;
