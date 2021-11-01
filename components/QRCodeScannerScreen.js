import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, ToastAndroid, Dimensions } from 'react-native'

export default function QRCodeScannerScreen({ route, navigation }) {

  const onSucces = (e) => {
    ToastAndroid.show('Scanned Strain Gauge: ' + e.data, ToastAndroid.LONG)
    navigation.push('Strain Gauge', {itemId: parseInt(e.data)})
  }

  return (
    <View>
      <QRCodeScanner 
        onRead={onSucces}
        cameraStyle={{ height: Dimensions.get('window').height }} 
      />
    </View>
  )
}