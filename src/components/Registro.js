import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Registro(props) {

    const [nome, setNome] = useState("Não Informado")
    const [email, setEmail] = useState("Não Informado")
    const [telefone, setTelefone] = useState("Não Informado")

    useLayoutEffect(() => {
        if (props.dados.nome)
            setNome(props.dados.nome)
        if (props.dados.email)
            setEmail(props.dados.email)
        if (props.dados.telefone)
            setTelefone(props.dados.telefone)

    }, [])


    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Dados", props.dados)}
        >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <View style={styles.coluna}><Text>Nome:</Text></View>
                    <View style={styles.valor}>
                        <Text style={{
                            fontWeight: "bold",
                            color: props.dados.nome ? "black" : "red"
                        }}>{nome}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.coluna} ><Text>Telefone:</Text></View>
                    <View style={styles.valor}>
                        <Text style={{
                            color: props.dados.telefone ? "black" : "red"
                        }}>{telefone}</Text></View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.coluna} ><Text>E-mail:</Text></View>
                    <View style={styles.valor}>
                        <Text style={{
                            color: props.dados.email ? "black" : "red"
                        }}>{email}</Text></View>
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
        flex: 1
    }, valor: {
        flex: 4
    }
});
