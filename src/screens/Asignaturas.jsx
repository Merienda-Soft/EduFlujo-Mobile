import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListSubject from '../components/common/ListSubject';

import { useData } from '../utils/globals';


const Asignaturas = ({ navigation, route  }) => {

  useBackButton(navigation);

  const { cursoId } = route.params; 
  const { data } = useData(); 

  const curso = data?.cursos.find((c) => c._id === cursoId);

  if (!curso) {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.errorText}>No se encontraron materias para este curso.</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <ListSubject
      image={require('../assets/images/Asignaturas.png')}
      materiaData={item}
      navigation={navigation}
      cursoId={cursoId}
    />
  );
  return (
    <View style={globalStyles.container}>

      <Search navigation={navigation} />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.push('Asistencias')}>
          <Text style={styles.createText}>
            Asistencias
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />


      <FlatList
        data={curso.materias}
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
