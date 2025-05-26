import React, { ReactNode, useCallback, useState } from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Text } from 'rn-base-component'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { colors, fonts, fontSizes, metrics } from '../themes'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '@/constants'
import { IconSymbol } from './IconSymbol'

export interface IDatePickerProps {
  onConfirm?: (item: Date) => void
  label: string
  value?: Date | string
  placeholder?: string
  children?: ReactNode | undefined
  leftComponent?: ReactNode | undefined
  containerStyle?: StyleProp<ViewStyle>
  isRequire?: boolean
  disabled?: boolean
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  onConfirm,
  leftComponent,
  label,
  children,
  value,
  placeholder,
  containerStyle,
  isRequire,
  disabled,
}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false)

  const renderChildren = useCallback(() => {
    if (!children) {
      if (value) {
        if (typeof value === 'string') {
          return <Text color={colors.black}>{value}</Text>
        }
        return <Text color={colors.black}>{dayjs(value).format(DATE_FORMAT.date)}</Text>
      }
      return <Text color={colors.dark}>{placeholder}</Text>
    }
    return children
  }, [children, placeholder, value])

  const handleShowDatePicker = useCallback(() => {
    setDatePickerVisible(true)
  }, [])

  const handleConfirm = useCallback(
    (date: Date) => {
      setDatePickerVisible(false)
      onConfirm?.(date)
    },
    [onConfirm],
  )

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.labelStyle}>
        {label}
        {!!isRequire && <Text style={styles.required}> *</Text>}
      </Text>
      <TouchableOpacity
        onPress={handleShowDatePicker}
        style={[styles.wrapper, disabled && styles.disabled]}
        disabled={disabled}>
        {leftComponent}
        <View style={styles.flex}>{renderChildren()}</View>
        <IconSymbol
          name="keyboard-arrow-down"
          color={colors.black}
          size={18}
          weight="medium"
          style={styles.icon}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisible(false)}
        date={typeof value === 'string' ? dayjs(value, DATE_FORMAT.date).toDate() : (value ?? new Date())}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.marginTop,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  wrapper: {
    borderWidth: metrics.borderWidth,
    height: metrics.textInputHeight,
    paddingHorizontal: metrics.marginVertical,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.white,
    borderColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: metrics.span,
    marginBottom: metrics.tiny,
    fontFamily: fonts.medium,
  },
  input: {
    fontSize: fontSizes.span,
  },
  labelFocus: {
    color: colors.black,
  },
  outlineFocus: {
    borderColor: colors.border,
  },
  error: {
    fontSize: fontSizes.span,
    color: colors.red,
    fontFamily: fonts.regular,
    position: 'absolute',
    bottom: -metrics.small,
  },
  icon: {
    width: metrics.small,
    height: metrics.small,
    marginLeft: metrics.tiny,
  },
  required: {
    color: colors.red,
    fontFamily: fonts.medium,
  },
  disabled: {
    backgroundColor: colors.border,
  },
})
