import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
//Estilos
import globalStyles from '../styles/GlobalStyles';

//Componente Bubble
import Bubble from '../components/common/Bubble';
//Componente Card
import CardHome from '../components/common/CardHome';

const contentCards = [
  {
    id: '1',
    image: require('../assets/images/Clases.png'),
    description: 'Quinto B',
    text: 'Asignaturas',
  },
  {
    id: '2',
    image: require('../assets/images/Asistencias.png'),
    description: 'Primero C',
    text: 'Asignaturas',
  },
  {
    id: '3',
    image: require('../assets/images/Actividades.png'),
    description: 'Sexto B',
    text: 'Asignaturas',
  },
  {
    id: '4',
    image: require('../assets/images/Asignaturas.png'),
    description: 'Asignaturas',
    text: 'Asignaturas',
  },
];



const Home = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <CardHome image={item.image} description={item.description} text={item.text} navigation={navigation} />
  );

  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>
        Bienvenido a PEDALID
      </Text>
      <Bubble text="Los profesores pueden cambiar vidas
                        con la mezcla correcra de tiza
                        y desafios."/>
      {/* Cards */}
      <FlatList
        data={contentCards}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '70%',
    marginBottom: 10,
    marginTop: Constants.statusBarHeight,
  },

  //flex de dos columnas y varias filas
  flatListContainer: {
    marginTop: 10,
    justifyContent: 'space-around'
  },

});
