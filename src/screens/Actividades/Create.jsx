import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

//Estilos
import globalStyles from '../../styles/GlobalStyles';
import useBackButton from '../../components/common/useBackButton';


import TypePicker from '../../components/common/Activity/TypePicker';
import { listTypeActivity, listTypeClass, listTypeSubject } from '../../utils/listForActivityForm';

const NewActivity = ({ navigation }) => {

  useBackButton(navigation);

  return (
    <View style={globalStyles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Titulo
          </Text>
          <TextInput style={styles.input} placeholder='Ingrese el titulo de la Actividad' />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Tipo
          </Text>
          <TypePicker navigation={navigation} list={listTypeActivity} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Ponderacion
          </Text>
          <TextInput keyboardType='numeric' style={styles.input} placeholder='Ponderacion...' />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Clase
          </Text>
          <TypePicker navigation={navigation} list={listTypeClass} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Asignatura
          </Text>
          <TypePicker navigation={navigation} list={listTypeSubject} />
        </View>

        <View style={styles.textareaContainer}>
          <Text style={styles.text}>
            Descripcion (opcional)
          </Text>
          <TextInput multiline style={styles.textarea} placeholder='Descripcion adicional...' />
        </View>

        {/* Boton para guardar la actividad */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Nueva Actividad')}>
            <Text style={styles.createText}>
              Guardar Actividad
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default NewActivity;

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '90%',
    padding: 10,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'right',
    width: '100%',
    height: 100,
    marginLeft: "5%",
  },

  textareaContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'right',
    width: '100%',
    height: 150,
    marginLeft: "5%",
  },

  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    width: '90%',
    height: 40,
    fontSize: 15,
    borderColor: '#D96E11',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },

  textarea: {
    width: '90%',
    height: 100,
    fontSize: 15,
    borderColor: '#D96E11',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontWeight: 'bold',
  },

  createButton: {
    backgroundColor: '#D97F11',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
