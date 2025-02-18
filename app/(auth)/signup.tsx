import React from 'react'
import {Link, Stack} from 'expo-router'
import {StyleSheet} from 'react-native'

import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {metrics} from '@/themes'

export default function SignUpScreen() {
  return (
    <>
      <Stack.Screen options={{title: 'Oops!'}} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesnt exist</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
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
  link: {
    marginTop: metrics.small,
    paddingVertical: metrics.small,
  },
})
