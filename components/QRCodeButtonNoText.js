import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Scan_qr_large } from '../resources/svgs'
import colors from '../resources/colors'

export default function QRCodeButtonNoText({ onPressHandler }) {
  return (
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <TouchableOpacity onPress={() => onPressHandler()}>
        <View style={styles.button}>
          <View style={{ margin: 10 }}>
            <Scan_qr_large />
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
    borderRadius: 100, 
    borderBottomWidth: 2, 
    borderRightWidth: 1, 
    borderLeftWidth: 1, 
    borderColor: colors.qrBorder,
    alignItems: 'center',
    justifyContent: 'center'
  }
})