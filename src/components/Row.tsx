import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'

interface IRowProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

export const Row: React.FC<IRowProps> = ({ style, children }) => (
  <View style={[styles.row, style]}>{children}</View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})
