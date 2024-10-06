import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListSubject from '../components/common/ListSubject';

const asignaturas = [
  {
    id: 1,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Lenguaje'
  },
  {
    id: 2,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Matematicas'
  },
  {
    id: 3,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Ciencias Sociales'
  },
  {
    id: 4,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Ciencias Naturales'
  },
  {
    id: 5,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Musica'
  },
  {
    id: 6,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Educacion Fisica'
  },
  {
    id: 7,
    Image: require('../assets/images/Asignaturas.png'),
    title: 'Ingles'
  },
]

const Asignaturas = ({ navigation }) => {

  useBackButton(navigation);

  const renderItem = ({ item }) => <ListSubject data={item} navigation={navigation} />

  return (
    <View style={globalStyles.container}>

      <Search navigation={navigation} />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Asistencias')}>
          <Text style={styles.createText}>
            Asistencias
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />


      <FlatList
        data={asignaturas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default Asignaturas;

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 10,
    justifyContent: 'space-around',
    width: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
  createButton: {
    backgroundColor: '#D97F11',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
});
