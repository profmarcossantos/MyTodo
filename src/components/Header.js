import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function Header(props) {

    const [cor, setCor] = useState("green")
    const [titulo, setTitulo] = useState("")

    useLayoutEffect(() => {
        if (props.corFundo)
            setCor(props.corFundo)
        if (props.titulo)
            setTitulo(props.titulo)
    }, [])


    return (
        <View style={{
            backgroundColor: cor,
            height: 70,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={styles.mensagem}> {titulo} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    mensagem: {
        color: "white",
        fontSize: 20,
        marginTop: 15
    }
});
