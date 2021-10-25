import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native'
import Titlebar from './components/TitleBar'
import Channels from './components/Channels'
import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const channelPressHandler = (id) => {
    console.log(id + " clicked!")
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Channels' component={Channels} />
      </Stack.Navigator>
    </NavigationContainer>

    /*<View style={{ flex: 1 }}>
    
      <Navigator />
    </View>*/
  );
}

//<Titlebar titleName='Channels' /> 
//<Channels channelPressHandler={channelPressHandler}/>


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
