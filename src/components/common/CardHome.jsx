import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardHome = ({ id, image, description }) => {

  const navigations = useNavigation();
  console.log(navigations)
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigations.navigate("Asignaturas", {cursoId: id } )}>
      <Image source={image} style={styles.image} />
      <Text style={styles.textCard}>{description}</Text>
    </TouchableOpacity>
  )
}

export default CardHome;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#D97F11',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#a65132',
  },

  textCard: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '70%',
    marginTop: 10,
  },
});
