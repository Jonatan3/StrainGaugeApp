import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import Titlebar from './components/TitleBar';
import Channels from './components/Channels';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Jonatan', id: '1' },
    { name: 'Joni', id: '2' },
    { name: 'Jonabob', id: '3' },
    { name: 'Jonder', id: '4' },
    { name: 'Jobob', id: '5' },
    { name: 'Jondai', id: '6' },
    { name: 'Jona', id: '7' },
  ])

  const channelPressHandler = (id) => {
    console.log(id + " clicked!")
    setPeople((prevPeople) => {
      return prevPeople.filter(people => people.id != id);
    })
  }
  
  return (
    <View>
      <Titlebar titleName='Channels' /> 
      <Channels channelPressHandler={channelPressHandler}/>
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
