// JavaScript source code
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Picker, Switch, Button} from 'react-native';

const rubroDefault = {
    id: null,
    descripcion:'',
    orden:1,
    destacar:false,
}

const Rubro = ({navigation}) => {
    const [flag, setFlag] = useState(false);
    const [rubro, setRubro] = useState(rubroDefault);
    const [guardar, setGuardar] = useState(false);
    

    useEffect(
        () => {
            const doPost = () => {
                // TODO hacer el PUT para actualizar
                fetch('http://192.168.1.9:5000/rubros',{
                        method: 'POST',
                        headers: {
                           'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(rubro),
                    }
                ).then(response => {
                    return response.json();
                })
                .then(data =>{
                    setGuardar(false)
                })
            };
            if(guardar){
                // llamar a algo que guarde
                 doPost();
            }
        }, [guardar]
    );

    const actualizarEstado = (nombre, valor) => {
        const rubroNuevo = {...rubro, [nombre]:valor};
        setRubro(rubroNuevo);
    }  

    const doGuardar = () =>{
        setGuardar(true);
    };

    return ( 
    <View>
        <Text>Rubro</Text>
        <Text>Nombre</Text>
        <TextInput value={rubro.descripcion}
            onChangeText={val => actualizarEstado('descripcion', val)}/>
        <Text>Orden en el catalogo</Text>
        <Picker selectedValue={rubro.orden}
            onValueChange={val => actualizarEstado('orden', val)}>
            <Picker.Item label="#1" value="1" />
            <Picker.Item label="#2" value="2" />
        </Picker>
        <Text>Destacar</Text>
        <Switch value={rubro.destacar}
            onValueChange={val => actualizarEstado('destacar', val)}/>
        <Button title="Guardar" 
            onPress={doGuardar}/>
        <Button title="Volver"
            onPress={() => {navigation.navigate('Profile')}}/>
     </View>
    )
}

export default Rubro;