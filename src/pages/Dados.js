import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as todoService from '../services/todoService';

export default function Dados(props) {
    const { navigation } = props
    const data = props.route.params
    const titulo = `${data.titulo}`
    const descricao = `${data.descricao}`
    const key = data.key

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: titulo
        })
    }, [])

    const excluir = async (key) => {
        try {
            Alert.alert(
                "Deseja Excluir?",
                "Esses dados serão apagados para sempre!",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: async() => {
                            await todoService.deleteTodo(key)
                            Alert.alert("Dados Excluídos com Sucesso")
                            navigation.navigate("Home", { atualizar: true })
                        }
                    }
                ]
            );

        } catch (error) {

        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}><Text>Título:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        fontWeight: "bold",
                        color: titulo ? "black" : "red"
                    }}>{titulo}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>Descrição:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: descricao ? "black" : "red"
                    }}>{descricao}</Text></View>
            </View>
            <View>
                <Button
                    title='Excluir'
                    onPress={() => excluir(key)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5

    }, linha: {
        flexDirection: "row"
    }, coluna: {
        flex: 1
    }, valor: {
        flex: 4
    }, dados: {
        flex: 4
    }, imagem: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
});
