import React from 'react'
import { PlatformPressable } from '@react-navigation/elements'
import * as Haptics from 'expo-haptics'

export const HapticTab = (props: any) => (
  <PlatformPressable
    {...props}
    onPressIn={ev => {
      if (process.env.EXPO_OS === 'ios') {
        // Add a soft haptic feedback when pressing down on the tabs.
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      }
      props.onPressIn?.(ev)
    }}
  />
)
