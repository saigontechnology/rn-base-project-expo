import {configureLocalization} from '@/locale/I18nConfig'
import {persistor, store} from '@/stores/store'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {StatusBar} from 'expo-status-bar'
import React, {useEffect} from 'react'
import {StyleSheet, useColorScheme} from 'react-native'
import 'react-native-reanimated'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {injectStore} from '@/services/networking/axios'
import {BaseProvider} from 'rn-base-component'
import {theme} from '@/themes'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {RootNavigation} from '@/routes/AppNavigation'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

injectStore(store)
configureLocalization('vi')

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    RobotoRegular: require('../src/assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('../src/assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('../src/assets/fonts/Roboto-Bold.ttf'),
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
    <GestureHandlerRootView style={styles.flex}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BaseProvider theme={theme}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <BottomSheetModalProvider>
                <RootNavigation />
                <StatusBar style="auto" />
              </BottomSheetModalProvider>
            </ThemeProvider>
          </BaseProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
})
