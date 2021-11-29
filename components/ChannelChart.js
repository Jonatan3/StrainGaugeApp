import React from "react";
import { Chart, Line, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import colors from "../resources/colors";
import StreamingConstructor from "../Streaming/StreamingConstructor";

export default ChannelChart = ({ channelData, channelId }) => {
  const streamingConstructor = StreamingConstructor.getInstance()
  var strainGauge = streamingConstructor.getChannelById(channelId)
  const vertAxisMaxLength = 8

  return (
    <Chart
      style={{ height: '100%', width: '100%' }}

      data={[...channelData]}
      padding={{ left: 32, bottom: 20, right: 20, top: 20 }}
      xDomain={{
        min: (strainGauge.getLatestDataPoint().x < vertAxisMaxLength)
          ? 0
          : (strainGauge.getLatestDataPoint().x - vertAxisMaxLength)
        , max: strainGauge.getLatestDataPoint().x + 0.01
      }}
      yDomain={{ min: -6, max: 6 }}
    >
      <VerticalAxis tickValues={[-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]} />
      <HorizontalAxis tickValues={calculateHoriTicks(channelData, vertAxisMaxLength)} />
      <Line
        theme={{ stroke: { color: colors.stroke, width: 1 } }}
        smoothing="bezier"
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