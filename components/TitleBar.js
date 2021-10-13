import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function TitleBar({ titleName }) {

  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>
        {titleName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBar: {
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