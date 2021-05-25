import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BusStackNavigator from './navigation/busNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="lite-content" backgroundColor={'#000'} />
      <BusStackNavigator/>
    </NavigationContainer >
  );
};