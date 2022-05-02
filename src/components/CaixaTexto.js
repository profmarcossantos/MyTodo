import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function CaixaTexto(props) {


    const [place, setPlace] = useState(props.place ? props.place : "")


    return (
        <View>
            {props.value ?
                <Text style={styles.campo}>
                    {place}
                </Text>
                : null}
            <View style={styles.caixaTexto}>
                <TextInput
                    placeholder={place}
                    onChangeText={props.set}
                    value={props.value}
                    secureTextEntry={props.security ? props.security : false}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    caixaTexto: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        margin: 5,
        borderColor: "#f1efee"
    }, campo: {
        fontSize: 9,
        marginLeft: 10,
        color: "#a8a7a6"
    }
});