import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Dados(props) {

    const { nome, telefone, email, endereco } = props.route.params

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: nome
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}><Text>Nome:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        fontWeight: "bold",
                        color: nome ? "black" : "red"
                    }}>{nome}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>Telefone:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: telefone ? "black" : "red"
                    }}>{telefone}</Text></View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>E-mail:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: email ? "black" : "red"
                    }}>{email}</Text></View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna} ><Text>Endereço:</Text></View>
                <View style={styles.valor}>
                    <Text style={{
                        color: endereco ? "black" : "red"
                    }}>{endereco}</Text></View>
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
