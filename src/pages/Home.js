import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button, Alert } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect, useEffect } from 'react'
import * as todoService from '../services/todoService';

export default function Home(props) {

  const { navigation } = props

  const [todos, setTodos] = useState([])

  useEffect(() => {
    buscarTodos()
  }, [props])


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace("Login")} title="Sair" />
      ),
    })

  }, [])


  const buscarTodos = async () => {

    try {
      let dados = await todoService.getTodos()
      setTodos(dados)

    } catch (error) {
      Alert.alert(error)
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Button onPress={() => navigation.navigate("Cadastro")} title="Cadastrar Todo" />
      </View>
      <View style={styles.lista}>
        <FlatList
          data={todos}
          renderItem={({ item }) =>
            <Registro
              dados={item}
              navigation={navigation}
            />
          }
          keyExtractor={item => item.key}

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
  }, botao: {
    marginTop: 10,
    padding: 10
  }
});
