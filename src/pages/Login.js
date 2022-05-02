import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button, Alert } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect } from 'react'

export default function Login({ navigation }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
    }
});
