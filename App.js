import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native'
import Titlebar from './components/TitleBar'
import Channels from './components/Channels'
import StrainGauge from './components/StrainGauge'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const channelPressHandler = (id) => {
    console.log(id + 'hej!')
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Channels' styles={{flex: 1}}>
          {props => <Channels {...props} channelPressHandler={channelPressHandler} />}
        </Stack.Screen>
        <Stack.Screen name='Strain Gauge' component={StrainGauge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 24,
  },
  item: {
    marginTop: 24,
    marginRight: 24,
    marginLeft: 24,
    padding: 30,
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  }
})
