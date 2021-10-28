import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function StrainGauge({ route, navigation }) {
  const strainGauge = StreamingConstructor.getDummyDataById(route.params.itemId)
  useEffect(() => {
    navigation.setOptions({ title: strainGauge.name })
  })

  return (
    <View style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
      <Text style={styles.mainText}>
        y/t Chart
      </Text>
      <View style={{ alignItems: 'center', flex: 2, }}>
        <View style={{ width: '95%', height: '100%', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Chart component :D
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12, }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainText}>
              Connection Status
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.secondaryText}>
              Good
            </Text>
          </View>
        </View>
        <View style={styles.lineBreaker} />
        <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12, }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainText}>
              Strain Gauge Type
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.secondaryText}>
              {strainGauge.type}
            </Text>
          </View>
        </View>
        <View style={styles.lineBreaker} />
        <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12, }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainText}>
              ID
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.secondaryText}>
              {strainGauge.id}
            </Text>
          </View>
        </View>
        <View style={styles.lineBreaker} />
        <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12, }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainText}>
              Live Value
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.secondaryText}>
              5
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    marginLeft: 24,
    fontSize: 18,
    color: '#000',
  },
  secondaryText: {
    marginRight: 24,
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
  },

  lineBreaker: {
    height: 1,
    width: '87%',
    backgroundColor: '#AAA',
    alignSelf: 'center',
  }
})