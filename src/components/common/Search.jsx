import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Search = ({ placeholder, onChangeText }) => {
    return (
        <View style={styles.searchContainer}>
            <TextInput placeholder={placeholder} style={styles.input} onChangeText={onChangeText} />
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Buscar
                </Text>
            </TouchableOpacity>
            </View>
        </View>
)}

export default Search;

const styles = StyleSheet.create({

    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    input: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#fff',
        width: 230,
        height: 40,
        paddingLeft: 20,
    },

    buttonContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        height: 40,
    },

    button: {
        backgroundColor: '#D96E11',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
}); 