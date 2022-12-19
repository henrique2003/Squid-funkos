import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Store } from '../screens/Store'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Store' component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
