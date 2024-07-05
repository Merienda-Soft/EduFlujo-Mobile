import {View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

// estilo global para le container
import globalStyles from '../styles/GlobalStyles';

const CodeRole = () => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.bubbleContainer}>
                <View style={styles.triangle}></View>
                <View style={styles.bubble}>
                    <Text style={styles.text}>
                        Ingrese el codigo proporcionado por su 
                        maestro, director o administrador para 
                        unirse a su equipo escolar.
                    </Text>
                    <TextInput placeholder="Ingrese el codigo" style={styles.input}/>
                </View>
            </View>
        </View>
    );
};

export default CodeRole;

//estilos
const styles = StyleSheet.create({
    bubbleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    bubble: {
        backgroundColor: '#D9D9D9',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
    },

    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 40,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#D9D9D9',
        position: 'absolute',
        top: -40,
        left: -20,
        marginTop: 60,
        zIndex: 2,
        transform: [{rotate: '-90deg'}],
    },

    text:{
        color: '#000',
        fontWeight: 'bold',
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