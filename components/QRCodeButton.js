import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Scan_qr } from '../resources/SVGs'

export default function QRCodeButton({ onPressHandler }) {
  return (
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <TouchableOpacity onPress={() => onPressHandler()}>
        <View style={styles.button}>
          <Text style={{ color: '#fff', padding: 8, paddingLeft: 16 }}>
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
    backgroundColor: '#2DA39D', 
    flexDirection: 'row', 
    borderRadius: 20, 
    borderBottomWidth: 2, 
    borderRightWidth: 1, 
    borderLeftWidth: 1, 
    borderColor: '#00817C',
    alignItems: 'center',
    justifyContent: 'center'
  }
})