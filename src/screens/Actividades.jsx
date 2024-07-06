import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListActivity from '../components/common/ListActivity';

const actividades = [
    {
        id: 1,
        title: 'Actividad 1',
        ponderacion: "30%",
    },
    {
        id: 2,
        title: 'Actividad 2',
        ponderacion: "40%",
    },
    {
        id: 3,
        title: 'Actividad 3',
        ponderacion: "30%",
    },
    {
        id: 4,
        title: 'Actividad 4',
        ponderacion: "20%",
    },
    {
        id: 5,
        title: 'Actividad 5',
        ponderacion: "10%",
    },  
    {
        id: 6,
        title: 'Actividad 6',
        ponderacion: "50%",
    },  
    {
        id: 7,
        title: 'Actividad 7',
        ponderacion: "70%",
    },  
    {
        id: 8,
        title: 'Actividad 8',
        ponderacion: "60%",
    },  
    {           
        id: 9,
        title: 'Actividad 9',
        ponderacion: "50%",
    },
    {           
        id: 10,
        title: 'Actividad 10',
        ponderacion: "40%",
    },
    {           
        id: 11,
        title: 'Actividad 11',
        ponderacion: "30%",
    },

];


const Actividades = ({ navigation }) => {

    useBackButton(navigation);

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
                <TouchableOpacity style={styles.createButton}>
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