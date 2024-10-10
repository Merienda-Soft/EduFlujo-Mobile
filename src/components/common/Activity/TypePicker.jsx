import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TypePicker = ({ list = [], onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    setSelectedValue(null);  // Restablecer el picker cuando sea necesario
  }, []);
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);  // Actualizamos el estado local con el valor seleccionado
          onValueChange(itemValue);  // Pasamos el valor al componente padre
        }}
      >
        <Picker.Item label="Seleccione un tipo" value={null} color="gray" />
        {list.map((item, index) => (
          <Picker.Item key={`item-${index}`} label={item.label} value={item.value} color="#000" />

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
});
