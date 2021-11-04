import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { View, ToastAndroid, Dimensions, Button, Text } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor'
import { TouchableWithoutFeedback } from 'react-native'
import { Arrow, Flash_off, Fslash_off } from '../resources/SVGs'


export default function QRCodeScannerScreen({ route, navigation }) {
  

  return (
    <View>
      <QRCodeScanner
        flashMode={RNCamera.Constants.FlashMode.torch}
        showMarker={true}
        onRead={onSucces}
        cameraStyle={{ height: Dimensions.get('window').height }}
        ref={(node) => { this.scanner = node }}
        customMarker={
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ marginTop: 24, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }} >
              <TouchableWithoutFeedback onPress={() => navigation.pop()} >
                <View>
                  <Arrow style={{ justifyContent: 'space-around' }} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ flex: 4, justifyContent: 'space-around', flexDirection: 'row' }}>
              <Text style={{ marginTop: 24, color: '#fff', fontSize: 16 }}>
                Scan QR to navigate to channel
              </Text>
            </View>
            <View style={{ marginTop: 24, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableWithoutFeedback onPress={() => RNCamera.Constants.FlashMode.torch} >
                <View>
                  <Flash_off />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
      />
    </View>
  )
}

const onFlashClick = (e) => {

}

const onSucces = (e) => {
  if (StreamingConstructor.getDummyDataById(parseInt(e.data)) !== null) {
    navigation.push('Strain Gauge', { itemId: parseInt(e.data) })
  }
  else {
    ToastAndroid.show('ERROR! no strain gauge with id of ' + e.data + ' found!', ToastAndroid.LONG)
    setTimeout(() => { this.scanner.reactivate() }, 3000)
  }
}