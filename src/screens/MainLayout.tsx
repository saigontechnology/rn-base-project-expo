import { configureLocalization } from '@/locale/I18nConfig'
import { store } from '@/stores/store'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import 'react-native-reanimated'
import { injectStore } from '@/services/networking/axios'
import { BaseProvider } from 'rn-base-component'
import { theme } from '@/themes'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { RootNavigation } from '@/routes/AppNavigation'
import { useSelector } from 'react-redux'
import { getLoadingIndicator } from '@/stores/selectors'
import { IndicatorDialog } from '@/components'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

injectStore(store)
configureLocalization('en')

export default function MainLayout() {
  const colorScheme = useColorScheme()
  const showGlobalIndicator = useSelector(getLoadingIndicator)
  const [loaded] = useFonts({
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
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
    <>
      <BaseProvider theme={theme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <BottomSheetModalProvider>
            <RootNavigation />
            <StatusBar style="auto" />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </BaseProvider>
      {showGlobalIndicator && <IndicatorDialog />}
    </>
  )
}
