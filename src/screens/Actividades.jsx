import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListActivity from '../components/common/ListActivity';

import {URL_API} from '../utils/apiUrl';

const actividades = [
    {
        id: 1,
        title: 'Actividad 1',
        ponderacion: "30%",
    },

];


const Actividades = ({ navigation, route }) => {
    const [actividades, setActividades] = useState([]);
    const { materiaid, cursoid, teacherid } = route.params;

    
    useBackButton(navigation);
    useEffect(() => {
        const fetchActividades = async () => {
          try {
            const url = `${URL_API}/activities/filter?materiaid=${materiaid}&cursoid=${cursoid}&teacherid=${teacherid}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await response.json();
            setActividades(result); // Asegúrate de ajustar según la estructura de tu API
          } catch (error) {
            console.error('Error al obtener las actividades:', error);
          }
        };
    
        fetchActividades();
      }, [materiaid, cursoid, teacherid]);


    const renderItem = ({ item }) => <ListActivity data={item} navigation={navigation} />;

    return (
        <View style={globalStyles.container}>

            <Search navigation={navigation} />

            {/* Filtros */} 
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>
                        filtro 1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>
                        Filtro 2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>
                        Filtro 3
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Boton para crear nueva actividad */}
            <View style={styles.separator} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Nueva Actividad', {ids: route.params})}>
                    <Text style={styles.createText}>
                        Nueva Actividad
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Lista de actividades */}
            <View style={styles.separator} />
            <FlatList
                data={actividades}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />


        </View>
    )
}

export default Actividades;

const styles = StyleSheet.create({
    filterContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    filterButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5,
        padding: 5,
        height: 30,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
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
    flatListContainer: {
        marginTop: 10,
        justifyContent: 'space-around',
        width: '90%',
    },
});