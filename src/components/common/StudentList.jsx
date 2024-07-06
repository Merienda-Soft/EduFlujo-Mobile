import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StudentList = ({ student }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const getPickerStyle = () => {
        switch (selectedValue) {
            case 'F':
                return styles.pickerF;
            case 'A':
                return styles.pickerA;
            case 'L':
                return styles.pickerL;
            default:
                return styles.pickerDefault;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{student.name} {student.lastname}</Text>
            <View style={[styles.pickerContainer, getPickerStyle()]}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    itemStyle={styles.pickerItem}
                >
                    <Picker.Item label="." value="." color="#000" />
                    <Picker.Item label="F" value="F" color="#000" />
                    <Picker.Item label="A" value="A" color="#000" />
                    <Picker.Item label="L" value="L" color="#000" />
                </Picker>
            </View>
        </View>
    );
};

export default StudentList;

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
    pickerContainer: {
        width: 95,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    picker: {
        width: '100%',
        height: '100%',
        color: '#000',
    },
    pickerItem: {
        color: '#fff',
    },
    pickerF: {
        color: '#000',
        borderColor: 'red',
        backgroundColor: '#ffcccc',
    },
    pickerA: {
        borderColor: 'green',
        backgroundColor: '#ccffcc',
    },
    pickerL: {
        borderColor: 'yellow',
        backgroundColor: '#ffffcc',
    },
    pickerDefault: {
        borderColor: '#fff',
        backgroundColor: '#444',
    },
});
