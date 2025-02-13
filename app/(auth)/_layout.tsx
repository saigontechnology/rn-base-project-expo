import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {Stack} from 'expo-router'
import React from 'react'
import {useColorScheme} from 'react-native'

const AuthLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="signin" options={{headerShown: false}} />
        <Stack.Screen name="signup" />
        <Stack.Screen name="forgot-password" />
      </Stack>
    </ThemeProvider>
  )
}

export default AuthLayout
