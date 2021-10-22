import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function TitleBar({ titleName }) {

  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>
        Hej
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBar: {
    //flex: 1,
    backgroundColor: 'coral',
    paddingTop: 24,
    paddingBottom: 24,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  }
})