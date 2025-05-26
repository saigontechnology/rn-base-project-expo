import { HapticTab } from '@/components'
import { colors } from '@/themes'
import { ColorSchemeName, Platform } from 'react-native'

export const getTabScreenOptions = (_: ColorSchemeName = 'light') => ({
  tabBarActiveTintColor: colors.primary,
  headerShown: false,
  tabBarButton: HapticTab,
  tabBarStyle: Platform.select({
    ios: {
      // Use a transparent background on iOS to show the blur effect
      position: 'absolute' as const,
    },
    default: {},
  }),
})

export const NO_HEADER = { headerShown: false, title: '' }
