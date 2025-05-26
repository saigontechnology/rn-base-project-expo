import { persistor, store } from '@/stores/store'
import React from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-reanimated'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MainLayout from '@/screens/MainLayout'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout />
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
