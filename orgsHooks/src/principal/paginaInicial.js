import React from "react"
import { StyleSheet, Text } from "react-native"

import Topo from "./topo"
import Produtores from "./produtores/produtores"


export default function TelaPrincipal(){
    return <Produtores topo={Topo} />
    
}
