import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import StreamingConstructor from '../Streaming/StreamingConstructor';
import QRCodeButtonNoText from '../components/QRButtonNoText';
import colors from '../resources/colors';
import { Dimensions } from 'react-native'
import StreamingConnector from '../Streaming/StreamingConnector';

export default function Channels({ navigation }) {

  //const streamingConnector = new StreamingConnector()
  //streamingConnector.connect()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={StreamingConstructor.getInstance().getChannels()}
        style={{ height: '100%' }}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback onPress={() => navigation.push('Strain Gauge', {itemId: item.id})}>
            <View>
              <View style={[styles.item, {backgroundColor: index % 2 == 0  ? "white" : colors.channelGrey }]}>
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
      <View style={{ position: 'absolute', top: (windowHeight/1.25), right: (windowWidth / 10) }}>
        <QRCodeButtonNoText onPressHandler={() => navigation.push('QR Scanner')}  />
      </View>
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