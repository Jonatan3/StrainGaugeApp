import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native'
import Titlebar from './components/TitleBar'
import Channels from './components/Channels'
import Navigator from './routes/homeStack'

export default function App() {
  const channelPressHandler = (id) => {
    console.log(id + " clicked!")
  }

  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
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
