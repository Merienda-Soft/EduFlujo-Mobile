import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import CodeRole from '../screens/CodeRole';
import MainLogin from '../screens/MainLogin';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainLogin">
                {/* 
                    Crea un navegador en la parte superior de la pantalla 
                    headerShown: false, oculta la barra de navegación en la parte superior de la pantalla
                */}
                <Stack.Screen name="MainLogin" component={MainLogin}  options={{headerShown: false}} />
                <Stack.Screen name="CodeRole" component={CodeRole} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;