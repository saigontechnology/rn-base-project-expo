import React, {useEffect} from 'react'
import {Redirect, Stack} from 'expo-router'
import {ActivityIndicator, StyleSheet} from 'react-native'

import {ThemedText, ThemedView} from '@/components'
import {RouteKeys} from '@/routes/RouteKeys'
import {metrics} from '@/themes'

export default function AppRoot() {
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
      <Stack.Screen options={{title: 'Oops!'}} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Authenticating...</ThemedText>
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
