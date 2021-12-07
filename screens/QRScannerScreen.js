import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { View, ToastAndroid, Dimensions } from 'react-native'
import StreamingConstructor from '../Streaming/StreamingConstructor'
import QRScannerOverlay from '../components/QRScannerOverlay'

export default function QRCodeScannerScreen({ navigation }) {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off)

  const onFlashClick = () => {
    if (flash === RNCamera.Constants.FlashMode.torch) {
      setFlash(RNCamera.Constants.FlashMode.off)
    }
    else {
      setFlash(RNCamera.Constants.FlashMode.torch)
    }
  }

  const onSucces = (e) => {
    if (StreamingConstructor.getInstance().getChannelById(parseInt(e.data)) !== null) {
      setTimeout(() => { this.scanner.reactivate() }, 100)
      navigation.push('Strain Gauge', { itemId: parseInt(e.data) })
    }
    else {
      ToastAndroid.show('ERROR! no strain gauge with id of ' + e.data + ' found!', ToastAndroid.LONG)
      setTimeout(() => { this.scanner.reactivate() }, 3000)
    }
  }

  return (
    <View>
      <QRCodeScanner
        flashMode={flash}
        showMarker={true}
        onRead={() => onSucces()}
        cameraStyle={{ height: Dimensions.get('window').height }}
        ref={(node) => { this.scanner = node }}
        customMarker={
          <QRScannerOverlay onFlashClick={onFlashClick} flash={flash} navigation={navigation} />
        }
      />
    </View>
  )
}