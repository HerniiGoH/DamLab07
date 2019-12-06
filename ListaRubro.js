// JavaScript source code
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Picker, Switch, Button, FlatList} from 'react-native';

const ListaRubro = () => {

    const [listaRubros, setListaRubros] = useState([]);
    const [actualizar, setActualizar] = useState(true);

    useEffect(
            () => {
            const doGet = () => {
            fetch('http://10.15.156.129:5000/rubros')
            .then(res => {return res.json()})
            .then(lista => {setListaRubros(lista); setActualizar(false)})
            };
            if(actualizar){doGet();}},[actualizar])

    return (
            <View>
                <FlatList 
                    data = {listaRubros}
                    renderItem = {<Text>{item.descripcion}</Text>}
                    keyExtractor = {item => item.id}
                />
            </View>
    )
}

export default ListaRubro;