import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button, Alert } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect } from 'react'
import { CheckBox, Icon } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [lembreme, setLembreme] = useState(false);


    useLayoutEffect(() => {
        verificarLembreme()
    }, [])


    const verificarLembreme = async () => {
        let user = await AsyncStorage.getItem("user")
        let pass = await AsyncStorage.getItem("pass")
        if (user) {
            setUsername(user)
            setLembreme(true)
        }
        if (pass) setPassword(pass)

    }

    const lembrar = async () => {
        setLembreme(!lembreme)

        if (!lembreme) {
            await AsyncStorage.setItem('user', username)
            await AsyncStorage.setItem("pass", password)

        } else {
            await AsyncStorage.removeItem("user")
            await AsyncStorage.removeItem("pass")
        }


    }

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
                    checked={lembreme}
                    onPress={lembrar}
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
