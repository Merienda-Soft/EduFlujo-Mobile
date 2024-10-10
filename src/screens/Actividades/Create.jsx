import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import globalStyles from '../../styles/GlobalStyles';
import useBackButton from '../../components/common/useBackButton';
import TypePicker from '../../components/common/Activity/TypePicker';
import { listTypeActivity } from '../../utils/listForActivityForm';
import {URL_API} from '../../utils/apiUrl';

const NewActivity = ({ navigation, route }) => {

  const {ids} = route.params;
  // Estados para cada campo del formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fecha, setFecha] = useState('2024-03-10');
  const [horario, setHorario] = useState('10:00');
  const [ponderacion, setPonderacion] = useState('');
  const [tipo, setTipo] = useState();
  const [cursoid, setCursoid] = useState(ids.cursoid);
  const [materiaid, setMateriaid] = useState(ids.materiaid);
  const [professorid, setProfessorid] = useState(ids.teacherid);
  const [fechaFin, setFechaFin] = useState('2024-03-20');

  useBackButton(navigation);

  // Función para crear la actividad
  const createActivity = async () => {
    const newActivity = {
      name: title,
      description: description,
      fecha: fecha,
      horario: horario,
      ponderacion: ponderacion,
      cursoid: cursoid,
      materiaid: materiaid,
      professorid: professorid,
      tipo: tipo, 
      fecha_fin: fechaFin
    };
    try {
      const url = `${URL_API}/activities`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Éxito', 'Actividad creada correctamente');
        navigation.goBack();  // Regresar a la vista anterior después de crear la actividad
      } else {
        Alert.alert('Error', result.error || 'Error al crear la actividad');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la conexión');
    }
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Título</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Ingrese el título de la Actividad'
            value={title}
            onChangeText={setTitle}  // Manejar el estado del título
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Tipo</Text>
          <TypePicker 
            list={listTypeActivity} 
            onValueChange={setTipo}  // Actualiza el estado de tipo cuando se selecciona un valor
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Ponderación</Text>
          <TextInput  
            style={styles.input} 
            placeholder='Ponderación...'
            value={ponderacion}
            onChangeText={setPonderacion}  // Manejar el estado de la ponderación
          />
        </View>

        <View style={styles.textareaContainer}>
          <Text style={styles.text}>Descripción (opcional)</Text>
          <TextInput 
            multiline 
            style={styles.textarea} 
            placeholder='Descripción adicional...'
            value={description}
            onChangeText={setDescription}  // Manejar el estado de la descripción
          />
        </View>

        {/* Botón para guardar la actividad */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.createButton} onPress={createActivity}>
            <Text style={styles.createText}>Guardar Actividad</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

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
