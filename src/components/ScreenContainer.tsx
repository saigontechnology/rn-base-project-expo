import React, { PropsWithChildren } from 'react'
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import { colors, isIOS, metrics } from '../themes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Header, IHeaderProp } from './Header'
interface IScreenContainerProps extends IHeaderProp {
  containerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  full?: boolean
  title?: string
  noPaddingBottom?: boolean
  showHeader?: boolean
  keyboardAvoidingBehavior?: KeyboardAvoidingViewProps['behavior']
}

export const ScreenContainer = ({
  full = false,
  containerStyle,
  children,
  style,
  title,
  noPaddingBottom = false,
  showHeader = false,
  keyboardAvoidingBehavior,
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
      <KeyboardAvoidingView
        behavior={keyboardAvoidingBehavior ?? (isIOS ? 'padding' : undefined)}
        style={[styles.flex, style]}>
        {children}
      </KeyboardAvoidingView>
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
