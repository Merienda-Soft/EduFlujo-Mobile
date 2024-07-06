import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import StudentList from '../components/common/StudentList';

const studentList = [
    {
        id: '1',
        name: 'David',
        lastname: 'Valdivia Arancibia',
    },
    {
        id: '2',
        name: 'Pedro',
        lastname: 'Perez',
    },
    {
        id: '3',
        name: 'Carlos',
        lastname: 'Perez',
    },
    {
        id: '4',
        name: 'Juan',
        lastname: 'Perez',
    },
    {
        id: '5',
        name: 'Pedro',
        lastname: 'Perez',
    },
    {
        id: '6',
        name: 'Carlos',
        lastname: 'Perez',
    },
    {
        id: '7',
        name: 'Juan',
        lastname: 'Perez',
    },
    {
        id: '8',
        name: 'Pedro',
        lastname: 'Perez',
    },
    {
        id: '9',
        name: 'Carlos',
        lastname: 'Perez',
    },
    {
        id: '10',
        name: 'Juan',
        lastname: 'Perez',
    },
    {   id: '11',
        name: 'Pedro',
        lastname: 'Perez',
    },
    {
        id: '12',
        name: 'Carlos',
        lastname: 'Perez',
    },
    {
        id: '13',
        name: 'Juan',
        lastname: 'Perez',
    },
    {
        id: '14',
        name: 'Pedro',
        lastname: 'Perez',
    },
    {
        id: '15',
        name: 'Carlos',
        lastname: 'Perez',
    },
];

const Asistencias = ({ navigation }) => {

    useBackButton(navigation);

    const renderItem = ({ item }) => (
        <StudentList 
            student={item}/>
    );

    return (
        <View style={globalStyles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>ESTUDIANTES</Text>
                <Text style={styles.headerDate}>07/06/2024</Text>
            </View>
            <FlatList
                data={studentList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}

export default Asistencias;

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#A65132',
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 5,
    },

    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width: 200,
    },

    headerDate: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        width: 85,
    },

    text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
        marginBottom: 10,
        marginTop: 10,
    },
    
    flatListContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
});