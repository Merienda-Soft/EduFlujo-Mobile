import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

// Datos simulados de estudiantes y tareas
const estudiantes = [
  { id: '1', nombre: 'David Valdivia' },
  { id: '2', nombre: 'Pedro Perez' },
  { id: '3', nombre: 'Carlos Perez' },
  { id: '4', nombre: 'Juan Perez' },
  { id: '5', nombre: 'Pedro Perez' },
  { id: '6', nombre: 'Carlos Perez' },
  { id: '7', nombre: 'Juan Perez' },
  { id: '8', nombre: 'Pedro Perez' },
  { id: '9', nombre: 'Carlos Perez' },
  { id: '10', nombre: 'Juan Perez' },
  { id: '11', nombre: 'Pedro Perez' },
  { id: '12', nombre: 'Carlos Perez' },
  { id: '13', nombre: 'Juan Perez' },
  { id: '14', nombre: 'Pedro Perez' },
  { id: '15', nombre: 'Carlos Perez' },
  { id: '16', nombre: 'Carlos Primero' },
];

const tareas = [
  { id: '1', titulo: 'Tarea 1' },
  { id: '2', titulo: 'Tarea 2' },
  { id: '3', titulo: 'Tarea 3' },
  { id: '4', titulo: 'Tarea 4' },
  { id: '5', titulo: 'Tarea 5' },
  { id: '6', titulo: 'Tarea 6' },
  { id: '7', titulo: 'Tarea 7' },
  { id: '8', titulo: 'Tarea 8' },
  { id: '9', titulo: 'Tarea 9' },
  { id: '10', titulo: 'Tarea 10' },
  { id: '11', titulo: 'Tarea 10' },
];

// Generación simulada de notas
const generarNotasSimuladas = () => {
  const notas = {};
  estudiantes.forEach((estudiante) => {
    notas[estudiante.id] = tareas.map(() => Math.floor(Math.random() * 100) + 1); // Notas aleatorias de 1 a 10
  });
  return notas;
};

const Records = ({ navigation }) => {

  useBackButton(navigation);

  const notas = generarNotasSimuladas();

  const renderEstudiante = ({ item }) => (
    <View style={styles.estudianteContainer}>
      <Text style={styles.nombre}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      {/* Contenedor principal con scroll vertical */}
      <ScrollView horizontal={false}>
        <View style={styles.tableContainer}>
          {/* Columna de nombres (estática horizontalmente, pero se desplaza verticalmente) */}
          <View style={styles.nombreColumn}>
            <View style={styles.headerNombres}>
              <Text style={styles.headerText}>ESTUDIANTES</Text>
            </View>
            <FlatList
              data={estudiantes}
              renderItem={renderEstudiante}
              keyExtractor={(item) => item.id}
              scrollEnabled={false} // Deshabilitamos el scroll individual para que siga el scroll principal
              style={styles.nombreList}
            />
          </View>

          {/* Columnas deslizables de tareas y notas */}
          <ScrollView horizontal>
            <View>
              {/* Encabezado de tareas */}
              <View style={styles.tareasHeader}>
                {tareas.map((tarea) => (
                  <View key={tarea.id} style={styles.tareaContainer}>
                    <Text style={styles.tareaTitulo}>{tarea.titulo}</Text>
                  </View>
                ))}
              </View>

              {/* Notas por tarea */}
              <View style={styles.notasContainer}>
                {estudiantes.map((estudiante) => (
                  <View key={estudiante.id} style={styles.notasRow}>
                    {tareas.map((_, tareaIndex) => (
                      <View key={tareaIndex} style={styles.inputContainer}>
                        <Text style={styles.input}>
                          {notas[estudiante.id][tareaIndex]}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
  },

  headerNombres: {
    backgroundColor: '#A65132',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  headerText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    
  },

  tareasHeader: {
    flexDirection: 'row',
    backgroundColor: '#A65132',
    height: 50,
    alignItems: 'center',
  },

  tareaContainer: {
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  tareaTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    
  },

  nombreColumn: {
    width: 150,
    backgroundColor: '#A65132',
  },

  estudianteContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#4D5D73',
    height: 50,
  },

  nombre: {
    fontSize: 17,
    color: '#fff',
  },
  nombreList: {
    backgroundColor: '#4D5D73', // Color de fondo de la lista de estudiantes
  },
  notasContainer: {
    flexDirection: 'column',
  },

  notasRow: {
    flexDirection: 'row',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    fontSize: 19,
    fontWeight: 'bold',
    width: 90,
    height: 50,
    textAlign: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
