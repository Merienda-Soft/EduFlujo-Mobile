import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Alert } from 'react-native';

const MainLogin = () => {

    return (
        <View style={styles.container}>

            <Image source={require('../assets/images/logo.webp')} style={styles.logo} />

            <TouchableOpacity onPress={() => Alert.alert('Hello')} style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
           
        </View>
    );
};

export default MainLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4D5D73',
        alignItems: 'center',
        justifyContent: 'center',
    },

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