import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect } from 'react'
import { getUsers } from '../services/ApiRandomUser';

export default function Home({ navigation }) {

  const [amigos, setAmigos] = useState([])
  const [info, setInfo] = useState({})


  useLayoutEffect(() => {

    getUsers(6)
      .then(dados => setAmigos(dados))
      .catch(erro => console.log(erro))

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace("Login")} title="Sair" />
      ),
    })

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Button onPress={() => navigation.navigate("Cadastro")} title="Cadastrar Todo" />
      </View>
      <View style={styles.lista}>
        <FlatList
          data={amigos}
          renderItem={({ item }) =>
            <Registro
              dados={item}
              navigation={navigation}
            />
          }
          keyExtractor={item => item.email}

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
