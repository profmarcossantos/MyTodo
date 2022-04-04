import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import Registro from '../components/Registro';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState, useLayoutEffect } from 'react'

const data = [
  {
    id: 1,
    nome: "Marcos Roberto dos Santos",
    email: "marcos.santos@imed.edu.br",
    telefone: "54 99983 7827",
    endereco: "Av. Flores da Cunha, Centro Carazinho - RS"
  }, {
    id: 2,
    nome: "Fahad Kalil",
    email: "fahad.kalil@imed.edu.br",
  }, {
    id: 3,
    nome: "Tiago Mendes",
  }, {
    id: 4,
    nome: "Suellen Spinello",
  }, {
    id: 5,
    nome: "Ricardo Ogliari"
  }, {
    id: 6,
    nome: "Marcos Roberto dos Santos",
    email: "marcos.santos@imed.edu.br",
    telefone: "54 99983 7827"
  }, {
    id: 7,
    nome: "Fahad Kalil",
    email: "fahad.kalil@imed.edu.br",
  }, {
    id: 8,
    nome: "Tiago Mendes",
  }, {
    id: 9,
    nome: "Suellen Spinello",
  }, {
    id: 10,
    nome: "Ricardo Ogliari"
  }, {
    id: 11,
    nome: "Marcos Roberto dos Santos",
    email: "marcos.santos@imed.edu.br",
    telefone: "54 99983 7827"
  }, {
    id: 12,
    nome: "Fahad Kalil",
    email: "fahad.kalil@imed.edu.br",
  }, {
    id: 13,
    nome: "Tiago Mendes",
  }, {
    id: 14,
    nome: "Suellen Spinello",
  }, {
    id: 15,
    nome: "Ricardo Ogliari"
  }
]

export default function Home({ navigation }) {

  useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.replace("Login")} title="Sair" />
      ),
    })

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <Registro
              dados={item}
              navigation={navigation}
            />
          }
          keyExtractor={item => item.id}

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
    //height: 280
  }
});
