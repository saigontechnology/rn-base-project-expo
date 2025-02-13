import React from 'react'
import {View, type ViewProps} from 'react-native'

import {useThemeColor} from '@/hooks/useThemeColor'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export const ThemedView: React.FC<ThemedViewProps> = ({style, lightColor, darkColor, ...otherProps}) => {
  const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background')

  return <View style={[{backgroundColor}, style]} {...otherProps} />
}
