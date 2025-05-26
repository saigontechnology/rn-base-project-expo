import React, { ReactNode, forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetProps as RNBottomSheetProps,
} from '@gorhom/bottom-sheet'
import { StyleSheet, View } from 'react-native'
import { colors, isIOS, metrics } from '../themes'
import { FullWindowOverlay } from 'react-native-screens'

const SNAP_POINTS = ['50%']

export type BottomSheetMethods = {
  open: () => void
  close: () => void
  snapToIndex: (index: number) => void
}

export interface IBottomSheetProps extends RNBottomSheetProps {
  showSearchBox?: boolean
  searchValue?: string
  onSearchChange?: (text: string) => void
  children: ReactNode | React.JSX.Element
  snapPoints?: string[] | number[]
  onClose?: () => void
}

export const BottomSheet = forwardRef<BottomSheetMethods, IBottomSheetProps>(
  ({ children, snapPoints = SNAP_POINTS, onClose, ...rest }, ref) => {
    const sheetRef = useRef<BottomSheetModal>(null)

    useImperativeHandle(ref, () => ({
      open: () => {
        sheetRef.current?.present()
      },
      close: () => {
        sheetRef.current?.close()
      },
      snapToIndex: (index: number) => {
        sheetRef.current?.snapToIndex(index)
      },
    }))

    const handleDismiss = useCallback(() => {
      onClose?.()
    }, [onClose])

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} onPress={() => sheetRef.current?.close()} />
      ),
      [],
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
        enablePanDownToClose
        containerStyle={styles.backdrop}
        onDismiss={handleDismiss}
        backdropComponent={renderBackdrop}
        containerComponent={isIOS ? renderContainerComponent : undefined}
        stackBehavior="push"
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
