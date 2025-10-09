import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { colors, fontSizes, metrics } from '@/themes'
import { RouteKeys } from '@/routes/RouteKeys'
import { ScreenContainer } from '@/components'

export const AboutScreen: React.FC = () => (
  <>
    <ScreenContainer style={styles.container} title={'About'}>
      <Link href={RouteKeys.SignIn} style={styles.link}>
        <Text style={styles.linkText}>Sign out</Text>
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
    marginTop: metrics.small,
  },
})
