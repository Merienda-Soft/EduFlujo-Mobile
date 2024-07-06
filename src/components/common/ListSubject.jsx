import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListSubject = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Actividades')}>
            <View style={styles.subContainer}>
                <Image source={data.Image} style={styles.image} />  

                <Text style={styles.title}>
                    {data.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListSubject;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A65132',
        borderRadius: 10,
        margin: "2%",
        marginTop: 10,
        padding: 10,
        height: 120,
        width: "46%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
});