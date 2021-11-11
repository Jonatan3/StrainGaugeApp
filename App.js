import React, { useState } from 'react';
import Channels from './components/Channels'
import StrainGauge from './components/StrainGauge'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRCodeScannerScreen from './components/QRCodeScannerScreen';
import "@hbk/ui-resources/build/index.css";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Channels' options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00457b',
          },
          headerTintColor: '#fff'
        }}>
          {props => <Channels {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Strain Gauge' component={StrainGauge} options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00457b',
          },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name='QR Scanner' component={QRCodeScannerScreen} options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
