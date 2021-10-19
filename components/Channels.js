import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Dimensions } from 'react-native';

export default function Channels() {
  const dummyChannels = [
    { name: 'The best sensor', type: 'Full bridge', key: Math.random().toString() },
    { name: 'RCS5607', type: 'Half bridge', key: Math.random().toString() },
    { name: 'Ahhhhhh', type: 'Full bridge', key: Math.random().toString() },
    { name: 'The negotiator', type: 'Rosette bridge', key: Math.random().toString() },
    { name: 'General Kenobi', type: 'Full bridge', key: Math.random().toString() },
    { name: 'This is getting', type: 'Full bridge', key: Math.random().toString() },
    { name: 'out of hand', type: 'Full bridge', key: Math.random().toString() },
    { name: 'now there are', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
    { name: 'two of them', type: 'Full bridge', key: Math.random().toString() },
  ]
  const windowWidth = (parseInt(Dimensions.get('window').width) / 2) - 24

  return (
    <View>
      <FlatList
        data={dummyChannels}
        renderItem={({ item, index }) => (
          <View>
            <View style={styles.item}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}> {item.name} </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.index}> {index} </Text>
                </View>
              </View>
              <Text> {item.type} </Text>
            </View>
            <View style={{
              height: 1,
              backgroundColor: 'grey',
              alignSelf: 'center',
              paddingHorizontal: windowWidth,
            }}>

            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
  },
  name: {
    fontSize: 20,
    paddingBottom: 12,

  },
  index: {
    textAlign: 'right',
    paddingRight: 24,
    fontSize: 20,
    color: 'grey',
  },
  type: {
    paddingLeft: 24,
  },
  itemBreaker: {
    height: 1,
    //width: '90%',
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
})