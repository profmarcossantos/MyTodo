import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Header from './src/components/Header'
import Registro from './src/components/Registro';

const data = [
  {
    id: 1,
    nome: "Marcos Roberto dos Santos",
    email: "marcos.santos@imed.edu.br",
    telefone: "54 99983 7827"
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

export default function App() {
  return (
    <View style={styles.container}>
      <Header corFundo="#3a67b0" titulo="IMED - Seja Bem-Vindo" />
      {
        /*
          Função Map só vale para Array.
          Obrigatório colocar uma key no elemento que é devolvido
     
                  {data.map((item, key) =>
                    <Registro
                      key={key}
                      nome={item.nome}
                      email={item.email}
                      telefone={item.telefone}
                    />
                  )}


        */
      }
      <View style={styles.lista}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <Registro
              nome={item.nome}
              email={item.email}
              telefone={item.telefone}
            />
          }
          keyExtractor={item => item.id}

        />
      </View>
      <View>
        <Text>Outras coisas...</Text>
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
    height: 270
  }
});
