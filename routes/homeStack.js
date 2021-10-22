import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Channels from '../components/Channels'
import TitleBar from '../components/TitleBar'

export default screens = {
  Channels: {
    screen: Channels
  },
  TitleBar: {
    screen: TitleBar
  }
}

