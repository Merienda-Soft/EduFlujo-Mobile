import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// estilo global para le container
import globalStyles from '../../styles/GlobalStyles';



const MainLogin = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>

            <Image source={require('../../assets/images/logo.webp')} style={styles.logo} />

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
           
        </View>
    );
};

export default MainLogin;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D96E11',
        padding: 12,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
    },

    text: {
        color: '#fff',
        fontSize: 20,
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 30
    }

});