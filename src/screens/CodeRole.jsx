import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

// estilo global para le container y bubble
import globalStyles from '../styles/GlobalStyles';

const CodeRole = ({navigation}) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.bubbleContainer}>
                <View style={globalStyles.triangle}></View>
                <View style={globalStyles.bubble}>
                    <Text style={globalStyles.text}>
                        Ingrese el codigo proporcionado por su 
                        maestro, director o administrador para 
                        unirse a su equipo escolar.
                    </Text>
                    <TextInput placeholder="Ingrese el codigo" style={styles.input}/>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')} style={styles.button}>
                        <Text style={globalStyles.text}>Unirse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CodeRole;

//estilos
const styles = StyleSheet.create({

    button: {
        backgroundColor: '#D96E11',
        padding: 12,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        fontSize: 20,
    },


    input:{
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#D96E11',
        borderWidth: 3,
        width: 200,
        height: 50,
        padding: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});