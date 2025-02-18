import React from 'react'
import {SymbolView, SymbolViewProps, SymbolWeight} from 'expo-symbols'
import {StyleProp, ViewStyle} from 'react-native'

interface Props {
  name: SymbolViewProps['name']
  size?: number
  color: string
  style?: StyleProp<ViewStyle>
  weight?: SymbolWeight
}

export const IconSymbol: React.FC<Props> = ({name, size = 24, color, style, weight = 'regular'}) => (
  <SymbolView
    weight={weight}
    tintColor={color}
    resizeMode="scaleAspectFit"
    name={name}
    style={[
      {
        width: size,
        height: size,
      },
      style,
    ]}
  />
)
