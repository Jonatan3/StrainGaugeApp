import React from 'react'
import { Text } from 'react-native'

export default function StrainGauge({ route, navigation }) {
  return (
    <Text>
      {route.params.itemId}
    </Text>
  )
}