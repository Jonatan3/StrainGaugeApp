import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { View, ToastAndroid, Dimensions, Button, Text } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor'
import { TouchableWithoutFeedback } from 'react-native'
import { Arrow } from '../resources/SVGs'


export default function QRCodeScannerScreen({ route, navigation }) {

  const onSucces = (e) => {
    if (StreamingConstructor.getDummyDataById(parseInt(e.data)) !== null) {
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
        showMarker={true}
        onRead={onSucces}
        cameraStyle={{ height: Dimensions.get('window').height }}
        ref={(node) => { this.scanner = node }}
        customMarker={
          <View>
            <TouchableWithoutFeedback onPress={() => console.log('Goddag')} style={{ height: 60, width: 60, }} > 
              <Arrow style={{ height: 60, width: 60, }} />
            </TouchableWithoutFeedback>

            <Button title='HEJSASASbA' onPress={() => console.log('Hej')}/>
          </View>
        }
      />
    </View>
  )
}