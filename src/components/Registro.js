import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'


export default function Registro(props) {

    const data = props.dados
    const [titulo, setTitulo] = useState("Não Informado")
    const [descricao, setDescricao] = useState("Não Informado")

    useLayoutEffect(() => {

        if (data.titulo)
            setTitulo(`${data.titulo}`)
        if (data.descricao)
            setDescricao(data.descricao)

    }, [])

    

    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Dados", props.dados)}
        >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <View style={styles.coluna} >
                        <Text style={styles.campo}>Título:</Text>
                        <Text style={{
                            color: data.titulo ? "black" : "red"
                        }}>{` ${titulo}`}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.coluna} >
                        <Text style={styles.campo}>Descrição:</Text>
                        <Text style={{
                            color: data.descricao ? "black" : "red"
                        }}>{` ${descricao}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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
        flex: 1,
        flexDirection: "row"
    }, valor: {
        flex: 4,
    }, campo: {
        width: 90
    }
});
