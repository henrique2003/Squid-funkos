import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { useFonts } from '@expo-google-fonts/outfit/useFonts'
import { Outfit_400Regular, Outfit_600SemiBold, Outfit_500Medium } from '@expo-google-fonts/outfit'
import { Audiowide_400Regular } from '@expo-google-fonts/audiowide'

import theme from './src/theme'
import { Text } from 'react-native'

function App (): JSX.Element {
  const [fontLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_500Medium,
    Audiowide_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
        {fontLoaded
          ? <>
        </>
          : <Text>Loading</Text>}
      <StatusBar backgroundColor='transparent' translucent />
    </ThemeProvider>
  )
}

export default App
