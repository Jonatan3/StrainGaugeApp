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
      navigation.push('Strain Gauge', { itemId: parseInt(e.data) })
    }
    else {
      ToastAndroid.show('ERROR! no strain gauge with id of ' + e.data + ' found!', ToastAndroid.LONG)
    }
  }

  return (
    <View>
      <QRCodeScanner
        flashMode={flash}
        showMarker={true}
        onRead={(e) => onSucces(e)}
        cameraStyle={{ height: Dimensions.get('window').height }}
        reactivate={true}
        reactivateTimeout={1000}
        customMarker={
          <QRScannerOverlay onFlashClick={onFlashClick} flash={flash} navigation={navigation} />
        }
      />
    </View>
  )
}