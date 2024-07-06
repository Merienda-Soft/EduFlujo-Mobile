import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListCard = ({active, description, image, navigation, routname }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routname)}>
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>
                {description}
            </Text>
            <View style={active ? styles.barStatusActive : styles.barStatusInactive}/>  
        </View>
        </TouchableOpacity>
    )
}

export default ListCard;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#A65132',
        padding: 10,
        borderRadius: 20,
        width: 300
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        margin: 5,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    barStatusActive: {
        backgroundColor: 'green',
        width: 70,
        height: 15,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
    },

    barStatusInactive: {
        backgroundColor: 'red',
        width: 70,
        height: 15,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
    },

});