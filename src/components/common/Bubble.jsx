import React from 'react';
import {View, Text } from 'react-native';

//estilo global para le container y el bubble
import globalStyles from '../../styles/GlobalStyles';


const Bubble = ({ children, text }) => {
    return (
            <View style={globalStyles.bubbleContainer}>
                <View style={globalStyles.triangle}></View>
                <View style={globalStyles.bubble}>
                    <Text style={globalStyles.text}>
                        {text}
                    </Text>
                </View>
            </View>
    );
};

export default Bubble;