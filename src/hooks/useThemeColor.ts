/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import {colors} from '@/themes'
import {useColorScheme} from 'react-native'

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof colors.light & keyof typeof colors.dark,
) {
  const theme = useColorScheme() ?? 'light'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return colors[theme][colorName]
  }
}
