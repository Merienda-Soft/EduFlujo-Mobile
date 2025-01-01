// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomBottomNav from './CustomBottomNav';

// Screens
import Home from '../screens/Home';
import Reports from '../screens/Reports';

import Asignaturas from '../screens/Asignaturas';
import Asistencias from '../screens/Asistencias';
import Clases from '../screens/Clases';
import Actividades from '../screens/Actividades';
import NuevaActividad from '../screens/Actividades/Create';
import Qualifications from '../screens/Actividades/Qualifications';
import Records from '../screens/Records';


const icons = {
    Home: {
        focused: require('../assets/icons/homeTrue.png'),
        default: require('../assets/icons/homeFalse.png')
    },
    Reportes: {
        focused: require('../assets/icons/reportTrue.png'),
        default: require('../assets/icons/reportFalse.png')
    },
    Perfil: {
        focused: require('../assets/icons/profileTrue.png'),
        default: require('../assets/icons/profileFalse.png')
    }
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ActividadesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Asignaturas" component={Asignaturas} />
                <Stack.Screen name="Asistencias" component={Asistencias}/>
                <Stack.Screen name="Mis Clases" component={Clases}/>
                <Stack.Screen name="Actividades" component={Actividades}/>
                <Stack.Screen name="Nueva Actividad" component={NuevaActividad}/>
                <Stack.Screen name="Calificaciones" component={Qualifications}/>
                <Stack.Screen name="Records" component={Records} />
        </Stack.Navigator>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}} tabBar={props => <CustomBottomNav {...props} icons={icons} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Reportes" component={Reports} options={{ headerShown: false }}/>
            <Tab.Screen name="Perfil" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Actividades" component={ActividadesStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
