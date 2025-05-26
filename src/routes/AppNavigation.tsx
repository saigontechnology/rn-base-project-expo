import { IconSymbol } from '@/components'
import { getTabScreenOptions, NO_HEADER } from './ScreenOptions'
import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { RouteNames } from './RouteKeys'
import { metrics } from '@/themes'

export const RootNavigation: React.FC = () => (
  <Stack screenOptions={NO_HEADER}>
    <Stack.Screen name={RouteNames.Root} />
    <Stack.Screen name={RouteNames.AuthStack} />
    <Stack.Screen name={RouteNames.AppStack} />
    <Stack.Screen name={RouteNames.NotFound} />
  </Stack>
)

export const AuthNavigation: React.FC = () => (
  <Stack screenOptions={NO_HEADER}>
    <Stack.Screen name={RouteNames.SignIn} />
    <Stack.Screen name={RouteNames.SignUp} />
    <Stack.Screen name={RouteNames.ForgotPassword} />
  </Stack>
)

export const TabNavigation: React.FC = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs screenOptions={getTabScreenOptions(colorScheme)}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={metrics.xl} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={metrics.xl} name="info" color={color} />,
        }}
      />
    </Tabs>
  )
}
