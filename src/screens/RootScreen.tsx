import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { RouteKeys } from '@/routes/RouteKeys'
import { fonts, fontSizes, metrics } from '@/themes'
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
      <View style={styles.container}>
        <Text style={styles.text}>{getString('auth.authenticate')}</Text>
        {isMockVerify && <ActivityIndicator size="large" style={styles.spacingTop} />}
      </View>
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
  text: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.large,
  },
  spacingTop: {
    marginTop: metrics.small,
  },
})
