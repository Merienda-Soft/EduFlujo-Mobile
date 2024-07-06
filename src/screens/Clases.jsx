import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

import Search from '../components/common/Search';
import ListCard from '../components/common/ListCard';

const constentList = [
    {
        id: '1',
        image: require('../assets/images/Clases.png'),
        description: 'Quinto B',
        active: true,
    },
    {
        id: '2',
        image: require('../assets/images/Asistencias.png'),
        description: 'Sexto A',
        active: false,
    },
    {
        id: '3',
        image: require('../assets/images/Actividades.png'),
        description: 'Cuarto C',
        active: false,
    },
];


const Clases = ({ navigation }) => {
    
    useBackButton(navigation);

    const renderItem = ({ item }) => (
        <ListCard 
            active={item.active} 
            description={item.description} 
            image={item.image} 
            navigation={navigation} 
            routname='Mis Clases' />
    );

    return (
        <View style={globalStyles.container}>
            {/* Buscador */}
            <Search placeholder='Buscar Clase......' />

            <FlatList
                data={constentList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.flatListContainer}
            />

        </View>
    )
}

export default Clases;

const styles = StyleSheet.create({
   flatListContainer: {
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
});