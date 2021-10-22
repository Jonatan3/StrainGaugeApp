import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import screens from './homeStack'

HomeStack = createStackNavigator({ screens })

export default createAppContainer(HomeStack)