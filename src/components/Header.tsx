import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Images, metrics } from '../themes'
import { ThemedText } from './ThemedText'
import { Row } from './Row'
import { router } from 'expo-router'

export interface IHeaderProp {
  title?: string
  leftStyle?: StyleProp<ViewStyle>
  centerStyle?: StyleProp<ViewStyle>
  rightStyle?: StyleProp<ViewStyle>
  onGoBack?: () => void
  hasBackButton?: boolean
  leftView?: React.ReactNode
  centerView?: React.ReactNode
  rightView?: React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
  headerIcon?: ImageSourcePropType
  titleStyle?: StyleProp<TextStyle>
  headerIconStyle?: StyleProp<ImageStyle>
  backButtonStyle?: StyleProp<ViewStyle>
}

export const Header: React.FC<IHeaderProp> = ({
  hasBackButton = true,
  title,
  leftStyle,
  backButtonStyle,
  centerStyle,
  onGoBack,
  leftView,
  centerView,
  rightView,
  containerStyle,
  headerIcon = Images.arrowLeft,
  titleStyle,
  headerIconStyle,
  rightStyle,
}) => (
  <Row style={[styles.headerContainer, containerStyle]}>
    {hasBackButton && (
      <TouchableOpacity
        style={[styles.backButton, backButtonStyle]}
        onPress={() => {
          if (onGoBack) {
            onGoBack()
          } else {
            router.back()
          }
        }}>
        <Image source={headerIcon} style={[styles.backIcon, headerIconStyle]} />
      </TouchableOpacity>
    )}
    {leftView && <View style={[styles.componentView, leftStyle]}>{leftView}</View>}

    {!!title && (
      <ThemedText type="label" numberOfLines={1} style={[styles.titleText, titleStyle]}>
        {title}
      </ThemedText>
    )}
    {centerView && <View style={[styles.componentView, centerStyle]}>{rightView}</View>}
    {rightView && <View style={[styles.componentView, rightStyle]}>{rightView}</View>}
  </Row>
)

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: metrics.xs,
    padding: metrics.small,
  },
  actionsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: metrics.small,
  },
  backButton: {
    alignItems: 'center',
    padding: metrics.xxs,
  },
  backIcon: {
    width: metrics.medium,
    height: metrics.medium,
    aspectRatio: 1,
  },
  componentView: {
    alignItems: 'center',
  },
  titleSection: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 4,
  },
  titleText: {
    textAlign: 'center',
  },
})
