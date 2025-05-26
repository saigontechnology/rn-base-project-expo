import React, { PropsWithChildren, useState } from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/IconSymbol'
import { colors, metrics } from '@/themes'

interface ICollapsibleProps {
  title: string
}

export const Collapsible: React.FC<PropsWithChildren<ICollapsibleProps>> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useColorScheme() ?? 'light'

  return (
    <ThemedView>
      <TouchableOpacity style={styles.heading} onPress={() => setIsOpen(value => !value)} activeOpacity={0.8}>
        <IconSymbol
          name="chevron-right"
          size={18}
          weight="medium"
          color={theme === 'light' ? colors.light.icon : colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: metrics.xxs,
  },
  content: {
    marginTop: metrics.xxs,
    marginLeft: metrics.large,
  },
})
