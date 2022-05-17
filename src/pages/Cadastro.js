import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import CaixaTexto from '../components/CaixaTexto';
import * as todoService from '../services/todoService';

export default function Cadastro({ navigation }) {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    const salvar = async () => {
        if (titulo){
            let todo = {
                titulo,
                descricao
            }
            try {
                await todoService.createTodo(todo)
                Alert.alert("Dados Salvos com Sucesso")
                navigation.navigate("Home", { atualizar: true })
    
            } catch (error) {
                console.log("algo deu errado!")
    
            }
        }else Alert.alert("Campo título é obrigatório!")
        
    }

    return (
        <View style={styles.container}>
            <View>
                <CaixaTexto
                    value={titulo}
                    set={setTitulo}
                    place="Informe o Título da Tarefa"

                />
                <CaixaTexto
                    value={descricao}
                    set={setDescricao}
                    place="Informe a Descrição da Tarefa"

                />

                <Button title='Registrar' onPress={salvar} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})