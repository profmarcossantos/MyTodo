import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Dados(props) {
    const data = props.route.params
    const nome = `${data.name.title} ${data.name.first} ${data.name.last}`
    const { cell, email } = data
    const endereco = `${data.location.country} ${data.location.state} - ${data.location.city}, ${data.location.street.name} nº ${data.location.street.number}`
    const foto = props.route.params.picture.large
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: nome
        })
    }, [])

    return (
        <View style={styles.container}>
            <View>

                <Image
                    style={styles.imagem}
                    source={{
                        uri: foto
                    }}
                />

            </View>
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
                        color: cell ? "black" : "red"
                    }}>{cell}</Text></View>
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
    }, dados: {
        flex: 4
    }, imagem: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
});
