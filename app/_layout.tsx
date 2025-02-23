import {NO_HEADER} from '@/routes/ScreenOptions'
import {persistor, store} from '@/stores/store'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import {StatusBar} from 'expo-status-bar'
import React, {useEffect} from 'react'
import {useColorScheme} from 'react-native'
import 'react-native-reanimated'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={NO_HEADER}>
            <Stack.Screen name="(auth)" options={NO_HEADER} />
            <Stack.Screen name="(app)" options={NO_HEADER} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
