import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native';
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function Channels({ channelPressHandler }) {
  const windowWidth = (parseInt(Dimensions.get('window').width) / 2) - 24
  console.log(StreamingConstructor.getDummyData())

  return (
    <View style={{ flex: 1, marginBottom: 24 }}>
      <FlatList
        data={StreamingConstructor.getDummyData()}
        style={{ height: '100%' }}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => channelPressHandler(item.key)}>
            <View>
              <View style={styles.item}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}> {item.name} </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.index}> {index + 1} </Text>
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
          </TouchableWithoutFeedback>
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
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
})