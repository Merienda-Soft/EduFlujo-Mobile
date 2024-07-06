import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListSubject from '../components/common/ListSubject';

const asignaturas = [
    { 
        id: 1,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Lenguaje' 
    },
    { 
        id: 2,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Matematicas' 
    },
    { 
        id: 3,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Ciencias Sociales' 
    },
    {
        id: 4,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Ciencias Naturales'
    },
    {
        id: 5,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Musica'
    },
    {
        id: 6,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Educacion Fisica' 
    },
    {
        id: 7,
        Image: require('../assets/images/Asignaturas.png'),
        title: 'Ingles'
    },
]

const Asignaturas = ({ navigation }) => {

    useBackButton(navigation);

   const renderItem = ({ item }) => <ListSubject data={item} navigation={navigation} />

    return (
        <View style={globalStyles.container}>

            <Search navigation={navigation} />
            <FlatList
                data={asignaturas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}

export default Asignaturas;

const styles = StyleSheet.create({
    flatListContainer: {
        marginTop: 10,
        justifyContent: 'space-around',
        width: '90%',
    },  
});