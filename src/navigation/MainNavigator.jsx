import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import BottomTabNavigator from './BottomTabNavigator';
import MainLogin from '../screens/Auth/MainLogin';
import CodeRole from '../screens/CodeRole';
import Login from '../screens/Auth/Login';



const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>

            {/* 
                Crea un navegador en la parte superior de la pantalla 
                headerShown: false, oculta la barra de navegación en la parte superior de la pantalla
            */}
            <Stack.Navigator initialRouteName="MainLogin">
                <Stack.Screen name="MainLogin" component={MainLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CodeRole" component={CodeRole} options={{ headerShown: false }} />
                <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{ headerShown: false }} />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
