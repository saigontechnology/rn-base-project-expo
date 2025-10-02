import React, { ReactNode, forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import {
  BackHandler,
  StyleSheet,
  NativeEventSubscription, View,
  StyleProp,
  ViewStyle
} from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'
import { colors, isIOS, metrics } from '../themes'

export interface IBottomSheetProps {
  children: ReactNode | React.JSX.Element
  snapPoints?: (string | number)[]
  onClose?: () => void
  backdropDisappearsOnIndex?: number
  backdropAppearsOnIndex?: number
  enableTouchThrough?: boolean
  backdropStyle?: StyleProp<ViewStyle>
  title?: string
  showHeader?: boolean
  maxHeight?: number | string
  enablePanDownToClose?: boolean
}

export type BottomSheetMethods = BottomSheetModalMethods & {
  open: () => void
}

const SNAP_POINTS = ['50%']

const renderCustomBackdrop = (
  props: BottomSheetDefaultBackdropProps,
  enableTouchThrough = false,
  backdropDisappearsOnIndex = -1,
  backdropAppearsOnIndex = 0,
) => (
  <BottomSheetBackdrop
    {...props}
    opacity={0.5}
    disappearsOnIndex={backdropDisappearsOnIndex}
    appearsOnIndex={backdropAppearsOnIndex}
    enableTouchThrough={enableTouchThrough}
  />
)

export const BottomSheet = forwardRef<BottomSheetMethods, IBottomSheetProps>(
  (
    {
      children,
      snapPoints = SNAP_POINTS,
      onClose,
      enablePanDownToClose = true,
      backdropDisappearsOnIndex = -1,
      backdropAppearsOnIndex = 0,
      enableTouchThrough = false,
      backdropStyle,
      title,
      showHeader = true,
      maxHeight,
      ...rest
    },
    ref,
  ) => {
    const sheetRef = useRef<BottomSheetModal>(null)
    const backHandler = useRef<NativeEventSubscription | null>(null)

    useImperativeHandle(ref, () => ({
      open: handlePresent,
      close: () => sheetRef.current?.close(),
      snapToIndex: (index: number) => sheetRef.current?.snapToIndex(index),
      collapse: () => sheetRef.current?.collapse(),
      expand: () => sheetRef.current?.expand(),
      snapToPosition: (position: number | string) => sheetRef.current?.snapToPosition(position),
      forceClose: () => sheetRef.current?.forceClose(),
      present: handlePresent,
      dismiss: () => sheetRef.current?.dismiss(),
    }))

    const handlePresent = useCallback(() => {
      sheetRef.current?.present()
      backHandler.current = BackHandler.addEventListener('hardwareBackPress', () => true)
    }, [])

    const handleDismiss = useCallback(() => {
      onClose?.()
      sheetRef.current?.dismiss()
      backHandler.current?.remove()
    }, [onClose])

    const renderBackdrop = useCallback(
      (props: BottomSheetDefaultBackdropProps) =>
        renderCustomBackdrop(props, enableTouchThrough, backdropDisappearsOnIndex, backdropAppearsOnIndex),
      [enableTouchThrough, backdropDisappearsOnIndex, backdropAppearsOnIndex],
    )

    const renderContainerComponent: React.ComponentType<React.PropsWithChildren> = useCallback(
      ({ children: containerChildren }) => <FullWindowOverlay>{containerChildren}</FullWindowOverlay>,
      [],
    )

    return (
      <BottomSheetModal
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.indicator}
        enablePanDownToClose={enablePanDownToClose}
        containerStyle={[styles.backdrop, StyleSheet.flatten(backdropStyle)]}
        onDismiss={handleDismiss}
        backdropComponent={renderBackdrop}
        containerComponent={isIOS ? renderContainerComponent : undefined}
        stackBehavior="push"
        enableDynamicSizing={false}
        {...rest}>
        <View style={styles.container}>{children}</View>
      </BottomSheetModal>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: metrics.marginHorizontal,
    backgroundColor: colors.white,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    backgroundColor: colors.border,
  },
  indicator: {
    backgroundColor: colors.white,
    width: metrics.xxl,
    borderRadius: metrics.tiny,
    height: metrics.tiny,
  },
})

BottomSheet.displayName = 'BottomSheet'
