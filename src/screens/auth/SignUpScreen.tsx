import React from 'react'
import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { getString } from '@/locale/I18nConfig'
import { colors, fontSizes, metrics } from '@/themes'
import { ScreenContainer } from '@/components'

export const SignUpScreen: React.FC = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <ScreenContainer style={styles.container} title={getString('auth.signUp')}>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>{getString('goToHome')}</Text>
      </Link>
    </ScreenContainer>
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
  linkText: {
    fontSize: fontSizes.body,
    color: colors.info,
  },
})
