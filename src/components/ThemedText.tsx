import React from 'react'
import { Text, type TextProps, StyleSheet } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'
import { colors, fonts, fontSizes, lineHeights } from '@/themes'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?:
    | 'span'
    | 'spanMedium'
    | 'small'
    | 'smallMedium'
    | 'body'
    | 'bodyMedium'
    | 'title'
    | 'subtitle'
    | 'link'
    | 'label'
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  type = 'body',
  ...rest
}) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      style={[
        { color },
        type === 'span' ? styles.span : undefined,
        type === 'spanMedium' ? styles.spanMedium : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'smallMedium' ? styles.smallMedium : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'bodyMedium' ? styles.bodyMedium : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'label' ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  span: {
    fontSize: fontSizes.span,
    fontFamily: fonts.regular,
    lineHeight: lineHeights.span,
  },
  spanMedium: {
    fontSize: fontSizes.span,
    fontFamily: fonts.medium,
    lineHeight: lineHeights.span,
  },
  small: {
    fontSize: fontSizes.small,
    fontFamily: fonts.regular,
    lineHeight: lineHeights.small,
  },
  smallMedium: {
    fontSize: fontSizes.small,
    fontFamily: fonts.medium,
    lineHeight: lineHeights.small,
  },
  body: {
    fontSize: fontSizes.body,
    fontFamily: fonts.regular,
    lineHeight: lineHeights.body,
  },
  bodyMedium: {
    fontSize: fontSizes.body,
    fontFamily: fonts.medium,
    lineHeight: lineHeights.body,
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: fonts.bold,
    lineHeight: lineHeights.title,
  },
  subtitle: {
    fontSize: fontSizes.large,
    fontFamily: fonts.bold,
    lineHeight: lineHeights.large,
  },
  link: {
    fontSize: fontSizes.body,
    color: colors.info,
    fontFamily: fonts.regular,
    lineHeight: lineHeights.body,
  },
  label: {
    fontSize: fontSizes.label,
    fontFamily: fonts.medium,
    lineHeight: lineHeights.label,
  },
})
