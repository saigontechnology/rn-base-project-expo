import React from 'react'
import { StyleSheet } from 'react-native'

import { metrics } from '@/themes'
import { getString } from '@/locale/I18nConfig'
import { ScreenContainer } from '@/components'

export const HomeScreen: React.FC = () => (
  <>
    <ScreenContainer style={styles.container} title={getString('home.title')}></ScreenContainer>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.medium,
  },
})
