import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
//Estilos
import globalStyles from '../styles/GlobalStyles';

//Componente Bubble
import Bubble from '../components/common/Bubble';
//Componente Card
import CardHome from '../components/common/CardHome';

import { useData } from '../utils/globals';

const Home = ({ navigation }) => {

  const { data } = useData();

  const courses = data?.cursos || [];

  const renderItem = ({ item }) => (
    <CardHome
      id={item._id} 
      image={require('../assets/images/Clases.png')} 
      description={item.name} />
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
        data={courses}
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

  flatListContainer: {
    marginTop: 10,
  },

});
