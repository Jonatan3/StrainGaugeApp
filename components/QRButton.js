import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Scan_qr } from '../resources/svgs'
import colors from '../resources/colors'

export default function QRCodeButton({ onPressHandler }) {
  return (
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <TouchableOpacity onPress={() => onPressHandler()} >
        <View style={styles.button}>
          <Text style={{ color: 'white', padding: 8, paddingLeft: 16 }}>
            Scan QR
          </Text>
          <View style={{ marginRight: 16 }}>
            <Scan_qr />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.qrButton, 
    flexDirection: 'row', 
    borderRadius: 20, 
    borderBottomWidth: 2, 
    borderRightWidth: 1, 
    borderLeftWidth: 1, 
    borderColor: colors.qrBorder,
    alignItems: 'center',
    justifyContent: 'center'
  }
})