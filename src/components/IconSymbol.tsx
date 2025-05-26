// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SymbolWeight } from 'expo-symbols'
import React from 'react'
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native'

export type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name']

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */

interface Props {
  name: MaterialIconName
  size?: number
  color: string | OpaqueColorValue
  style?: StyleProp<TextStyle>
  weight?: SymbolWeight
}

export const IconSymbol: React.FC<Props> = ({ name, size = 24, color, style }) => (
  <MaterialIcons color={color} size={size} name={name} style={style} />
)
