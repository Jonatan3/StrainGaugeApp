import React from 'react';
import Channels from './screens/Channels'
import StrainGauge from './screens/StrainGauge'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRCodeScannerScreen from './screens/QRCodeScannerScreen';
import colors from './resources/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Channels' options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: 'white'
        }}>
          {props => <Channels {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Strain Gauge' component={StrainGauge} options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: 'white'
        }}/>
        <Stack.Screen name='QR Scanner' component={QRCodeScannerScreen} options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
