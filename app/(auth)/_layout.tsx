import {NO_HEADER} from '@/routes/ScreenOptions'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {Stack} from 'expo-router'
import React from 'react'
import {useColorScheme} from 'react-native'

const AuthLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={NO_HEADER}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="forgot-password" />
      </Stack>
    </ThemeProvider>
  )
}

export default AuthLayout
