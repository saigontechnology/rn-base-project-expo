import React from 'react'
import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

import { getString } from '@/locale/I18nConfig'
import { metrics } from '@/themes'
import { RouteKeys } from '@/routes/RouteKeys'
import { ScreenContainer } from '@/components'

export const NotFoundScreen: React.FC = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <ScreenContainer style={styles.container} title={getString('notExist')}>
      <Link href={RouteKeys.Home} style={styles.link}>
        <Text>{getString('goToHome')}</Text>
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
})
