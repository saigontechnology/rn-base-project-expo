import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, Image, ImageSourcePropType } from 'react-native'
import { metrics } from '@/themes'
import { ThemedText } from './ThemedText'

interface EmptyListProps {
  icon?: ImageSourcePropType
  title?: string
  description?: string
  iconSize?: number
  iconColor?: string
  style?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  descriptionStyle?: StyleProp<TextStyle>
}

export const EmptyList: React.FC<EmptyListProps> = ({
  icon,
  title,
  description,
  iconSize = metrics.large,
  iconColor,
  style,
  titleStyle,
  descriptionStyle,
}) => (
  <View style={[styles.container, style]}>
    {icon && (
      <Image
        source={icon}
        style={[styles.icon, { tintColor: iconColor, width: iconSize, height: iconSize }]}
      />
    )}
    {title && (
      <ThemedText type="smallMedium" style={[styles.title, titleStyle]}>
        {title}
      </ThemedText>
    )}
    {description && (
      <ThemedText type="small" style={[styles.description, descriptionStyle]}>
        {description}
      </ThemedText>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: metrics.xxs,
  },
  icon: {
    width: metrics.icon,
    height: metrics.icon,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
})
