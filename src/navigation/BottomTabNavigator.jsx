// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomNav from './CustomBottomNav';

// Screens
import Home from '../screens/Home';
import Clases from '../screens/Clases';
import Asistencias from '../screens/Asistencias';
import Actividades from '../screens/Actividades';
import Asignaturas from '../screens/Asignaturas';
import NuevaActividad from '../screens/Actividades/Create';
import Qualifications from '../screens/Actividades/Qualifications';
import Reports from '../screens/Reports';

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

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }} tabBar={props => <CustomBottomNav {...props} icons={icons} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Reportes" component={Reports} options={{ headerShown: true }} />
      <Tab.Screen name="Perfil" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Mis Clases" component={Clases} />
      <Tab.Screen name="Asistencias" component={Asistencias} />
      <Tab.Screen name="Actividades" component={Actividades} />
      <Tab.Screen name="Asignaturas" component={Asignaturas} />
      <Tab.Screen name="Nueva Actividad" component={NuevaActividad} />
      <Tab.Screen name="Calificaciones" component={Qualifications} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
