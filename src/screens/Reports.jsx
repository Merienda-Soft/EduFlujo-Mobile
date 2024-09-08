import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useBackButton from "../components/common/useBackButton";

//Estilos globales
import globalStyles from "../styles/GlobalStyles";
//componente Bubble
import Bubble from "../components/common/Bubble";

const Reports = ({ navigation }) => {

  useBackButton(navigation);

  return (

    <View style={globalStyles.container}>
      <Bubble text="Reportes actualizados hasta la fecha 2024-09-08" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Asistencias')}>
          <Text style={styles.createText}>
            Ver Registros
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Asistencias')}>
          <Text style={styles.createText}>
            Generar Plantillas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Asistencias')}>
          <Text style={styles.createText}>
            Imprimir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

};

export default Reports;

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'column',
    width: '80%',
    marginTop: 10,
  },
  createButton: {
    backgroundColor: '#D97F11',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  createText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

