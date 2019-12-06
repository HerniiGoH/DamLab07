// JavaScript source code
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Picker, Switch, Button, FlatList} from 'react-native';

const ListaRubro = () => {

    const [listaRubros, setListaRubros] = useState([]);
    const [actualizar, setActualizar] = useState(true);

    useEffect(
        () => {
            const doGet = () => {
                fetch('http://192.168.1.9:5000/rubros')
                .then(res => {return res.json()})
                .then(lista => {setListaRubros(lista); setActualizar(false)})
            };
            if(actualizar){
                doGet();
            }
        },
        []);

        const doBorrar = (item) => {
            fetch('http://192.168.1.9:5000/rubros/'+item.id,{
                            method: 'DELETE'
                        }
                    ).then(response => {
                        return response.json();
                    })
                    .then(setActualizar(true));
        };

    return (
        <View>
            <FlatList 
                data = {listaRubros}
                renderItem = {({item}) => (
                   <View> 
                        <Text>{item.descripcion}</Text>
                        <Button title="Editar"/>
                        <Button title="Eliminar"
                            onPress={ () => {doBorrar(item)}}/>
                    </View>
                )}
                keyExtractor = {item => item.id}
            />
        </View>
    );
}

export default ListaRubro;