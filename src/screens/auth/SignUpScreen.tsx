import React from 'react'
import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

import { ThemedText, ThemedView } from '@/components'
import { getString } from '@/locale/I18nConfig'
import { metrics } from '@/themes'

export const SignUpScreen: React.FC = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <ThemedView style={styles.container}>
      <ThemedText type="title">{getString('auth.signUp')}</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText type="link">{getString('goToHome')}</ThemedText>
      </Link>
    </ThemedView>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.medium,
  },
  link: {
    marginTop: metrics.small,
    paddingVertical: metrics.small,
  },
})
