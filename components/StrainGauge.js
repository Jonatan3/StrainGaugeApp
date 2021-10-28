import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function StrainGauge({ route, navigation }) {
  const strainGauge = StreamingConstructor.getDummyDataById(route.params.itemId)
  useEffect(() => {
    navigation.setOptions({ title: strainGauge.name })
  })

  return (
    <View style={{ flex: 1, marginLeft: 12, marginRight: 12}}>
      <Text style={styles.chartText}> 
        y/t Chart 
      </Text>
      <View style={{ alignItems: 'center', flex: 2 }}>
        <View style={{ width: '95%', height: '100%', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Chart component :D
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.chartText}>
          Connection Status
        </Text>
        <View style={styles.lineBreaker} />
        <Text style={styles.chartText}>
          Live Value
        </Text>
        <View style={styles.lineBreaker} />
        <Text style={styles.chartText}>
          ID
        </Text>
        <View style={styles.lineBreaker} />
        <Text style={styles.chartText}>
          Strain Gauge Type 
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartText: {
    marginLeft: 24,
    marginBottom: 12,
    marginTop: 12,
    fontSize: 18,
    color: '#000',
  },
  lineBreaker: {
    height: 1,
    width: '87%',
    backgroundColor: '#AAA',
    alignSelf: 'center',
  }
})