import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native'
import Titlebar from './components/TitleBar'
import Channels from './components/Channels'
import StrainGauge from './components/StrainGauge'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<View>
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Channels' >
          {props => <Channels {...props} />} 
        </Stack.Screen>
        <Stack.Screen name='Strain Gauge' component={StrainGauge} />
      </Stack.Navigator>
    </NavigationContainer>
    //</View>
  );
}

