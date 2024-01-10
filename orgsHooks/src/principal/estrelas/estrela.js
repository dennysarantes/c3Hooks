import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFuncao(grande);

    return <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}
            >
            <Image source={preenchida ? estrela : estrelaCinza} style={estilos.estrela} />
        </TouchableOpacity>
}

const estilosFuncao = (ehGrande) => StyleSheet.create({
    estrela: {
        width: ehGrande ? 36 : 12,
        height: ehGrande ? 36 : 12,
        marginRight: 2,
    }
});