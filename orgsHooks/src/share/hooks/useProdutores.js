import { useState, useEffect } from 'react';

import { ServicosMocks } from '../../share/mocks'


export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = ServicosMocks.getProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista];
}