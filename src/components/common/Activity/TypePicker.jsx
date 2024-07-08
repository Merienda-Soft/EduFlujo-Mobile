import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const TypePicker = ({ navigation, list = [] }) => {
    const [selectedValue, setSelectedValue] = useState("");
    
    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="." value="." color="transparent" style={styles.item} />
                {/* itera en el array de lista para mostrar los items y no pone nada si no hay ningun item
                en la lista */}
                {list.map((item, index) => (
                    <Picker.Item label={item} value={index} color="#000" />
                ))}
                
            </Picker>
        </View>
    );
   
}

export default TypePicker;

const styles = StyleSheet.create({

    pickerContainer: {
        width: "90%",
        height: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        borderColor: '#D96E11',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 10,
    },
    picker: {
        width: '100%',
        height: '100%',
        color: '#000',
        backgroundColor: '#D9A796',
    },
    item: {
        backgroundColor: '#D9A796',
    },
});
