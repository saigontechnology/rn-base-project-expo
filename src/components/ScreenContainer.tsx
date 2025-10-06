import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { colors, metrics } from '../themes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Header, IHeaderProp } from './Header'
interface IScreenContainerProps extends IHeaderProp {
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  full?: boolean
  title?: string
  noPaddingBottom?: boolean
  showHeader?: boolean
}

export const ScreenContainer = ({
  full = false,
  containerStyle,
  children,
  style,
  title,
  noPaddingBottom = false,
  showHeader = false,
  ...rest
}: PropsWithChildren<IScreenContainerProps>) => {
  const insets = useSafeAreaInsets()
  const shouldShowHeader = !!title || showHeader
  return (
    <View
      style={[
        styles.container,
        !full && { paddingTop: insets.top, paddingBottom: noPaddingBottom ? metrics.zero : insets.bottom },
        containerStyle,
      ]}>
      {shouldShowHeader && <Header title={title} {...rest} />}
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.flex, style]}
        keyboardShouldPersistTaps="handled">
        {children}
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  flex: {
    flex: 1,
  },
})
