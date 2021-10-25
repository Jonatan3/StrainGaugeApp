import React from 'react'
import { Text } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function StrainGauge({ route, navigation }) {
  const strainGauge = StreamingConstructor.getDummyDataById(route.params.itemId)

  return (
    <Text>
      {strainGauge.name}
    </Text>
  )
}