import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {URL_API} from '../utils/apiUrl';
import { useData } from '../utils/globals';

// estilo global para le container y bubble
import globalStyles from '../styles/GlobalStyles';

const CodeRole = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { setData } = useData();

    const handleLogin = async () => {
        try {
            const url = `${URL_API}/teachers/67072a068d0df54d855f43ad`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const result = await response.json();

            if (response.ok) {
                setData(result); // Almacena los datos del profesor en el contexto
                navigation.navigate('HomeTabs'); // Navega a la pantalla principal
            } else {
                // Manejar errores de autenticación
                alert('Login fallido. Verifica tus credenciales.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.bubbleContainer}>
                <View style={styles.box}>
                    <Text style={styles.title}>
                        Bienvenido a PEDALID
                    </Text>
                    <Text style={styles.text}>
                        Usuario
                    </Text>
                    <TextInput placeholder="Ej: Juanito@gmail.com" style={styles.input} />
                    <Text style={styles.text}>
                        Contraseña
                    </Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="********"
                            style={styles.input}
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        >
                            <MaterialCommunityIcons
                                name={passwordVisible ? "eye-off" : "eye"}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CodeRole;

//estilos
const styles = StyleSheet.create({

    box: {
        backgroundColor: '#D9D9D9',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        width: "90%",
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        width: "100%",
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    text: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 20
    },

    button: {
        backgroundColor: '#D96E11',
        padding: 12,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    buttonText: {
        fontSize: 23,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        width: "100%",
        textAlign: 'center',
    },

    input: {
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#D96E11',
        borderWidth: 3,
        width: '100%',
        height: 50,
        padding: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },

    icon: {
        position: 'absolute',
        right: 0,
        top: 25,
        padding: 10,
    }
});