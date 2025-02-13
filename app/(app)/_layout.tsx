import {Tabs} from 'expo-router'
import React from 'react'
import {useColorScheme} from 'react-native'

import {IconSymbol} from '@/components'
import {getTabScreenOptions} from '@/routes/ScreenOptions'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs screenOptions={getTabScreenOptions(colorScheme)}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
