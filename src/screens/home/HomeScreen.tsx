import React from 'react'
import { StyleSheet } from 'react-native'

import { ThemedText, ThemedView } from '@/components'
import { metrics } from '@/themes'
import { getString } from '@/locale/I18nConfig'

export const HomeScreen: React.FC = () => (
  <>
    <ThemedView style={styles.container}>
      <ThemedText type="title">{getString('home.title')}</ThemedText>
    </ThemedView>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.medium,
  },
  link: {
    marginTop: metrics.small,
    paddingVertical: metrics.small,
  },
})
