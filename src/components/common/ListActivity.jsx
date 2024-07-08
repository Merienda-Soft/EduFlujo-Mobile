import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListActivity = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Calificaciones')}>
            <Text style={styles.title}>
                {data.title} || {data.ponderacion}
            </Text>
        </TouchableOpacity>
    )
}

export default ListActivity;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A65132',
        borderRadius: 5,
        margin: "2%",
        marginTop: 2,
        padding: 5,
        height: 70,
        width: "46%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});