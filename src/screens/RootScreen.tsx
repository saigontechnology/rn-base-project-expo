import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import { ActivityIndicator, StyleSheet } from 'react-native'

import { ThemedText, ThemedView } from '@/components'
import { RouteKeys } from '@/routes/RouteKeys'
import { metrics } from '@/themes'
import { getString } from '@/locale/I18nConfig'

export const RootScreen: React.FC = () => {
  const [isMockVerify, setIsMockVerify] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsMockVerify(false)
    }, 1000)
  }, [])

  if (!isMockVerify) {
    return <Redirect href={RouteKeys.SignIn} />
  }

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">{getString('auth.authenticate')}</ThemedText>
        {isMockVerify && <ActivityIndicator size="large" style={styles.spacingTop} />}
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.medium,
  },
  spacingTop: {
    marginTop: metrics.small,
  },
})
