import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

import { useThemeColor } from '@/hooks/useThemeColor'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
  full?: boolean
}

export const ThemedView: React.FC<ThemedViewProps> = ({
  style,
  lightColor,
  darkColor,
  children,
  full = false,
  ...otherProps
}) => {
  const insets = useSafeAreaInsets()
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return (
    <View
      style={[
        styles.flex,
        { backgroundColor },
        !full && { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
      {...otherProps}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.flex, style]}
        keyboardShouldPersistTaps="handled">
        {children}
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
})
