import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Estilos
import globalStyles from '../../styles/GlobalStyles';
import useBackButton from '../../components/common/useBackButton';
import Bubble from '../../components/common/Bubble';
import Search from '../../components/common/Search';
import StudentListQualification from '../../components/common/Activity/StudentListQualification';

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


const Qualifications = ({ navigation }) => {

    useBackButton(navigation);

    const renderItem = ({ item }) => (
        <StudentListQualification 
            student={item}/>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={styles.text}>
                Actividad 1
            </Text>
            <Bubble text={'Descripcion de la actividad a evaluar'} />
            <Search navigation={navigation} />
            <View style={styles.separator} />
            <FlatList
                data={studentList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContainer}

            />
        </View>
    )
}

export default Qualifications;

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    separator: {
        width: '90%',
        height: 3,
        backgroundColor: '#fff',
        marginTop: 10,
    },

    flatListContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },

});