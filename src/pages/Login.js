import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button, Alert } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect } from 'react'
import { CheckBox, Icon } from '@rneui/themed';

export default function Login({ navigation }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [check1, setCheck1] = useState(false);

    const validaLogin = () => {

        if (username == "Admin" && password == "123") {
            navigation.replace("Home")
        } else {
            Alert.alert("Usuário ou Senha Inválidos!")
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <CaixaTexto
                    value={username}
                    set={setUsername}
                    place="Informe o Usuário"

                />
                <CaixaTexto
                    value={password}
                    set={setPassword}
                    place="Password"
                    security={true}

                />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    center
                    title="Lembre-me"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />

            </View>
            <View>
                <Button
                    title='Entrar'
                    onPress={validaLogin}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, lista: {
        height: 280
    }, checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    }, checkbox: {
        alignSelf: "center",
    },
});
