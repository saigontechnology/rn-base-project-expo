import {HapticTab} from '@/components'
import TabBarBackground from '@/components/ui/TabBarBackground'
import {colors} from '@/themes'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {ColorSchemeName, Platform} from 'react-native'

export const getTabScreenOptions = (colorScheme: ColorSchemeName = 'light'): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: colors?.[colorScheme ?? 'light'].tint as string,
  headerShown: false,
  tabBarButton: HapticTab,
  tabBarBackground: TabBarBackground,
  tabBarStyle: Platform.select({
    ios: {
      // Use a transparent background on iOS to show the blur effect
      position: 'absolute',
    },
    default: {},
  }),
})

export const NO_HEADER = {headerShown: false}
