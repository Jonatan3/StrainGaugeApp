import React, { useState } from "react";
import { Chart, Line, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import colors from "../resources/colors";
import StreamingConstructor from "../Streaming/StreamingConstructor";

export default function ChannelChart({ channelData }) {
  const vertAxisMaxLength = 8

  return (
    <Chart
      style={{ height: '100%', width: '100%' }}

      data={[...channelData]}
      padding={{ left: 32, bottom: 20, right: 20, top: 20 }}
      xDomain={{
        min: (channelData[channelData.length - 1].x < vertAxisMaxLength)
          ? 0
          : (channelData[channelData.length - 1].x - vertAxisMaxLength)
        , max: channelData[channelData.length - 1].x + 0.01
      }}
      
      yDomain={(getMinYValue(channelData) !== getMaxYValue(channelData) 
        ? { min: Math.floor(getMinYValue(channelData)), max: Math.ceil(getMaxYValue(channelData)) } 
        : { min: Math.floor(getMinYValue(channelData)) - 1, max: Math.ceil(getMaxYValue(channelData)) + 1 })}
    >
      <VerticalAxis tickValues={calculateVertTicks(channelData)} />
      <HorizontalAxis tickValues={calculateHoriTicks(channelData, vertAxisMaxLength)} />
      <Line
        theme={{ stroke: { color: colors.stroke, width: 1 } }}
      />

    </Chart>
  )
}

const calculateHoriTicks = (channelData, vertAxisMaxLength) => {
  let tickArray = []
  let largestArrayValue = 2 * Math.round(channelData[channelData.length - 1].x / 2)

  for (let i = 0; i <= vertAxisMaxLength / 2; i++)
    tickArray.push(largestArrayValue - 8 + (i * 2))

  return tickArray
}

const getMinYValue = (channelData) => {
  let smallestYValue = channelData[0].y
  for (let i = 0; i < channelData.length; i++) {
    if (smallestYValue > channelData[i].y)
      smallestYValue = channelData[i].y
  }
  return smallestYValue
}

const getMaxYValue = (channelData) => {
  let largestYValue = channelData[0].y
  for (let i = 0; i < channelData.length; i++) {
    if (largestYValue < channelData[i].y)
      largestYValue = channelData[i].y
  }
  return largestYValue
}

const calculateVertTicks = (channelData) => {
  const minimumYValue = getMinYValue(channelData)
  const maximumYValue = getMaxYValue(channelData)

  const yValueSpan = maximumYValue - minimumYValue
  let tickArray = []

  if (yValueSpan < 6) {
    for (let i = 0; i <= yValueSpan + 1; i++) {
      tickArray.push(Math.floor(minimumYValue + i))
    }
  } else if (yValueSpan < 11) {
    for (let i = 0; i <= (yValueSpan / 2) + 1; i++) {
      tickArray.push(Math.floor(minimumYValue + i * 2))
    }
  } else if (yValueSpan < 21) {
    for (let i = 0; i <= (yValueSpan / 4) + 1; i++) {
      tickArray.push(Math.floor(minimumYValue + i * 4))
    }
  } else {
    for (let i = 0; i <= (yValueSpan / 5) + 1; i++) {
      tickArray.push(Math.floor(minimumYValue + i * 5))
    }
  }
  return tickArray
}
