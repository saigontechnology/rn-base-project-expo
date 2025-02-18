import React from 'react'
import type {PropsWithChildren, ReactElement} from 'react'
import {StyleSheet, useColorScheme} from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'

import {ThemedView} from '@/components/ThemedView'
import {useBottomTabOverflow} from '@/components/ui/TabBarBackground'
import {metrics} from '@/themes'

const HEADER_HEIGHT = 250

type Props = PropsWithChildren<{
  headerImage: ReactElement
  headerBackgroundColor: {dark: string; light: string}
}>

export const ParallaxScrollView: React.FC<Props> = ({children, headerImage, headerBackgroundColor}) => {
  const colorScheme = useColorScheme() ?? 'light'
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)
  const bottom = useBottomTabOverflow()
  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
          [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
        ),
      },
      {
        scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
      },
    ],
  }))

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{bottom}}
        contentContainerStyle={{paddingBottom: bottom}}>
        <Animated.View
          style={[styles.header, {backgroundColor: headerBackgroundColor[colorScheme]}, headerAnimatedStyle]}>
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: metrics.xxl,
    gap: metrics.small,
    overflow: 'hidden',
  },
})
