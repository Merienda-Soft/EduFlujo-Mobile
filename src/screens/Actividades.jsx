import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Estilos
import globalStyles from '../styles/GlobalStyles';
import useBackButton from '../components/common/useBackButton';

const Actividades = ({ navigation }) => {

    useBackButton(navigation);

    return (
        <View style={globalStyles.container}>
            <Text style={styles.text}>
                Actividades
            </Text>
        </View>
    )
}

export default Actividades;

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
        marginBottom: 10,
        marginTop: 10,
    },
});