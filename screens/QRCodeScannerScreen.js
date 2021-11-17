import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { View, ToastAndroid, Dimensions, Button, Text } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor'
import { TouchableWithoutFeedback } from 'react-native'
import { Arrow, Flash_off, Flash_on } from '../resources/svgs'

export default function QRCodeScannerScreen({ route, navigation }) {
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
    if (StreamingConstructor.getInstance().getDummyDataById(parseInt(e.data)) !== null) {
      setTimeout(() => { this.scanner.reactivate() }, 100)
      navigation.push('Strain Gauge', { itemId: parseInt(e.data) })
    }
    else {
      ToastAndroid.show('ERROR! no strain gauge with id of ' + e.data + ' found!', ToastAndroid.LONG)
      setTimeout(() => { this.scanner.reactivate() }, 3000)
    }
  }

  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View>
      <QRCodeScanner
        flashMode={flash}
        showMarker={true}
        onRead={() => onSucces()}
        cameraStyle={{ height: Dimensions.get('window').height }}
        ref={(node) => { this.scanner = node }}
        customMarker={
          <View style={{ flex: 1, width: SCREEN_WIDTH }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <View style={{ marginTop: 24, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }} >
                <TouchableWithoutFeedback onPress={() => navigation.pop()} >
                  <View>
                    <Arrow style={{ justifyContent: 'space-around' }} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{ flex: 4, justifyContent: 'space-around', flexDirection: 'row' }}>
                <Text style={{ marginTop: 24, color: 'white', fontSize: 16 }}>
                  Scan QR to navigate to channel
                </Text>
              </View>
              <View style={{ marginTop: 24, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={() => onFlashClick()} >
                  <View>
                    {flash === RNCamera.Constants.FlashMode.off ? <Flash_off /> : <Flash_on />}
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
              <View style={{ flex: 3, backgroundColor: 'transparent', borderWidth: 4, borderColor: 'white', borderRadius: 16 }} />
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />

            </View>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
          </View>
        }
      />
    </View>
  )
}