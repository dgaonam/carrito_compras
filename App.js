
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from "./components/Styles/Styles";

import CarContext from "./context/CarContext";

import Home from './components/Home/Home';
import ListaProductos from './components/Producto/ListaProductos';

const Stack = createStackNavigator();



export default function App() {

  const  carrito = {
    total: 0,
    numero: 0,
    productos:[]
   };

   

  return (
    <CarContext.Provider value={carrito}>
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#593275',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >

          <Stack.Screen
            name="Home"
            options={{ title: 'Compras' }}
            component={Home}
          />
            <Stack.Screen
            name="ListaProductos"
            options={{ title: 'Carrito de Compras' }}
            component={ListaProductos}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CarContext.Provider>
  );
}
