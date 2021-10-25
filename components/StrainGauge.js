import React from 'react'
import { Text } from 'react-native'
import StreamingConstructor from '../constructors/StreamingConstructor';

export default function StrainGauge({ route, navigation }) {

  console.log('Screen change to strain gauge')
  const strainGauge = StreamingConstructor.getDummyDataById(route.params.itemId)
  console.log('8=====D')
  console.log(strainGauge)

  return (
    <Text>
      {strainGauge.type}
    </Text>
  )
}