import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StreamingConstructor from '../Streaming/StreamingConstructor'
import QRCodeButton from '../components/QRCodeButton'
import ChannelChart from '../components/ChannelChart'
import colors from '../resources/colors'

export default function StrainGauge({ route, navigation }) {
  const strainGauge = StreamingConstructor.getInstance().getChannelById(route.params.itemId)
  const [channelData, setChannelData] = useState(strainGauge.getChannelData())
  var interval = null

  const startDataGeneration = () => {
    if (interval !== null) {
      return
    }
    interval = (setInterval(() => {
      setChannelData(strainGauge.generateDataPoint())
    }, 100))
  }

  // The component will unmount on every update, however this ensure that no data leak will happen!
  const stopDataGeneration = () => {
    if (interval === null) {
      return
    }
    clearInterval(interval)
    interval = null
  }

  useEffect(() => {
    navigation.setOptions({ title: strainGauge.getName() })
    if (strainGauge.getConnectionStatus()) {
      startDataGeneration()
    }
    return () => {
      stopDataGeneration()
    }
  })

  return (
    <View style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
      <Text style={styles.chartText}>
        y/t Chart
      </Text>
      <View style={{ alignItems: 'center', flex: 4, }}>
        <View style={{ width: '95%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          {<ChannelChart channelData={channelData} channelId={strainGauge.getId()} />}
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <View style={{ flexDirection: 'row', marginBottom: 12, marginTop: 12, }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainText}>
              Connection Status
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={[styles.connectionStatus, strainGauge.getConnectionStatus()
              ? { backgroundColor: colors.connectionGood }
              : { backgroundColor: colors.connectionBad }]} />
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
              {strainGauge.getType()}
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
              {strainGauge.getId()}
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
              {Math.round(channelData[channelData.length - 1].y * 1000) / 1000}
            </Text>
          </View>
        </View>
      </View>
      <QRCodeButton onPressHandler={() => navigation.push('QR Scanner')} />
    </View>
  )
}

const styles = StyleSheet.create({
  chartText: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 24,
    fontSize: 18,
    color: 'black',
  },
  mainText: {
    marginLeft: 24,
    fontSize: 18,
    color: 'black',
  },
  secondaryText: {
    marginRight: 24,
    fontSize: 18,
    color: 'black',
    textAlign: 'right',
  },
  lineBreaker: {
    height: 1,
    width: '87%',
    backgroundColor: '#AAA',
    alignSelf: 'center',
  },
  connectionStatus: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
    borderRadius: 50,
    marginRight: 24,
    marginTop: 4,
  }
})