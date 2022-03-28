import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Registro(props) {

    const [nome, setNome] = useState("Não Informado")
    const [email, setEmail] = useState("Não Informado")
    const [telefone, setTelefone] = useState("Não Informado")

    useLayoutEffect(() => {

        if (props.nome)
            setNome(props.nome)
        if (props.email)
            setEmail(props.email)
        if (props.telefone)
            setTelefone(props.telefone)

    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}><Text>Nome:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        fontWeight: "bold",
                        color: props.nome ? "black" : "red"
                    }}>{nome}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>Telefone:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: props.telefone ? "black" : "red"
                    }}>{telefone}</Text></View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>E-mail:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: props.email ? "black" : "red"
                    }}>{email}</Text></View>
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
    }
});
