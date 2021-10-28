import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { View, Text } from 'react-native'

export default function QRCodeScannerScreen({ route, navigation }) {


  return (
    <View>


      <QRCodeScanner  />
    </View>
  )
}