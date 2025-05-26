import React from 'react'
import { Text, type TextProps, StyleSheet } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'
import { fontSizes, fontWeights, metrics } from '@/themes'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: fontSizes.body,
    lineHeight: metrics.large,
  },
  defaultSemiBold: {
    fontSize: fontSizes.body,
    lineHeight: metrics.large,
    fontWeight: fontWeights.semiBold,
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
    lineHeight: metrics.xxl,
  },
  subtitle: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
  },
  link: {
    lineHeight: metrics.xxl,
    fontSize: fontSizes.body,
  },
})
