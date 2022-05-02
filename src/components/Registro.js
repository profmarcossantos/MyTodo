import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Registro(props) {

    const data = props.dados
    const [nome, setNome] = useState("Não Informado")
    const [email, setEmail] = useState("Não Informado")
    const [telefone, setTelefone] = useState("Não Informado")
    const [foto, setFoto] = useState(null)

    useLayoutEffect(() => {

        if (data.name.title)
            setNome(`${data.name.title} ${data.name.first} ${data.name.last}`)
        if (data.email)
            setEmail(data.email)
        if (data.cell)
            setTelefone(data.cell)
        if (data.picture)
            setFoto(data.picture.thumbnail)

    }, [])


    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Dados", props.dados)}
        >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <View style={styles.foto}>
                        <Image
                            style={styles.imagem}
                            source={{
                                uri: foto
                            }}
                        />
                    </View>
                    <View style={styles.dados}>

                        <View style={styles.coluna}><Text>Nome:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                fontWeight: "bold",
                                color: data.name ? "black" : "red"
                            }}>{nome}</Text>
                        </View>
                        <View style={styles.coluna} ><Text>Telefone:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                color: data.cell ? "black" : "red"
                            }}>{telefone}</Text></View>
                        <View style={styles.coluna} ><Text>E-mail:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                color: data.email ? "black" : "red"
                            }}>{email}</Text></View>

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
        flex: 1
    }, valor: {
        flex: 4
    }, foto: {
        flex: 1
    }, dados: {
        flex: 4
    }, imagem: {
        width: 50,
        height: 50,
    },
});
