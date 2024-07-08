import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const StudentListQualification = ({ student }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{student.name} {student.lastname}</Text>
            <TextInput style={styles.input} keyboardType='numeric' />
        </View>
    );
};

export default StudentListQualification;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderTopColor: '#fff',
        borderTopWidth: 1,
        borderRadius: 20, // Dark background for better contrast
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width: 200,
    },

    input: {
        width: '25%',
        height: 40,
        fontSize: 15,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#D9D9D9',
        fontWeight: 'bold',
    },
});
