import React from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Arrow, Flash_off, Flash_on } from '../resources/svgs'
import colors from '../resources/colors'

export default function QRScannerOverlay({ onFlashClick, flash, navigation }) {

  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1, width: SCREEN_WIDTH }}>
      {/* Top part of the greyed out area, and contain buttons and text in the top */}
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: colors.cameraNoFocus }}>
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
      {/* Middel part of the overlay */}
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: colors.cameraNoFocus }} />

        <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'transparent' }} >
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: 'white', marginTop: 1, marginLeft: 1 }} />
            <View style={{ flex: 4 }} />
            <View style={{ flex: 1, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: 'white', marginBottom: 1, marginLeft: 1 }} />
          </View>
          <View style={{ flex: 4 }} />
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, borderTopWidth: 2, borderRightWidth: 2, borderColor: 'white', marginTop: 1, marginRight: 1 }} />
            <View style={{ flex: 4 }} />
            <View style={{ flex: 1, borderBottomWidth: 2, borderRightWidth: 2, borderColor: 'white', marginBottom: 1, marginRight: 1 }} />
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: colors.cameraNoFocus }} />

      </View>
      {/* last part of the of the overlay */}
      <View style={{ flex: 1, backgroundColor: colors.cameraNoFocus }} />
    </View>
  )
}