import React, { useState } from "react";
import { Chart, Line, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import colors from "../resources/colors";

export default function ChannelChart(channelId) {
  const [data, setdata] = useState([
    {x: 1, y: 6},
    {x: 2, y: -3},
    {x: 3, y: 8},
    {x: 4, y: 4},
    {x: 5, y: 0},
    {x: 6, y: 4},
    {x: 7, y: -3},

  ])

  return (
    <Chart
      style={{ height: '100%', width: '100%' }}
      data = {data}
      padding={{ left: 32, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 1, max: 9 /* Max found value to min found value, unless 2 and -2 contains it */ }}
      yDomain={{ min: -5, max: 10 /* max should be the newest recived data time, and min should be that minus ~20 */ }}
    >
      <VerticalAxis tickCount={6} />
      <HorizontalAxis tickCount={6} />
      <Line 
        theme={{ stroke: { color: colors.header, width: 2 } }} 
        smoothing="bezier" 
      /> 

    </Chart>
  )
}