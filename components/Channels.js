import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback, Button } from 'react-native'
import { Dimensions } from 'react-native';
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function Channels({ navigation }) {
  const windowWidth = (parseInt(Dimensions.get('window').width) / 2) - 24

  return (
    <View style={{ flex: 1 }}>
      <Button title='QR Code Scanner' onPress={() => navigation.push('QR Scanner')}/>
      <FlatList
        data={StreamingConstructor.getDummyData()}
        style={{ height: '100%' }}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => navigation.push('Strain Gauge', {itemId: item.id})}>
            <View>
              <View style={[styles.item, {backgroundColor: index % 2 == 0  ? "#fff" : "#F8F8FD"}]}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}> {item.name} </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.index}> {index < 9 ? '0' + (index + 1) : (index + 1) } </Text>
                  </View>
                </View>
                <Text> {item.type} </Text>
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