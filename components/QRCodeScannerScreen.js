import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, ToastAndroid, Dimensions } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function QRCodeScannerScreen({ route, navigation }) {

  const onSucces = (e) => {
    if (StreamingConstructor.getDummyDataById(parseInt(e.data)) !== null) {
      navigation.push('Strain Gauge', {itemId: parseInt(e.data)})
    }
    else {
      ToastAndroid.show('ERROR! no strain gauge with id of ' + e.data + ' found!', ToastAndroid.LONG)
      setTimeout(() => { this.scanner.reactivate() }, 3000)
    }
  }

  return (
    <View>
      <QRCodeScanner 
        onRead={onSucces}
        cameraStyle={{ height: Dimensions.get('window').height }} 
        ref={(node) => { this.scanner = node }}
      />
    </View>
  )
}