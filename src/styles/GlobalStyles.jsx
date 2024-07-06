import { StyleSheet } from 'react-native'; 

const globalStyles = StyleSheet.create({

    // Estilo para el componente Container

    container: {
        flex: 1,
        backgroundColor: '#4D5D73',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 20,
    },

    // Estilo para el componente Bubble

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

});

export default globalStyles;