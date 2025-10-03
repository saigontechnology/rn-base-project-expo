import React, { useState, useCallback } from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { TextInputProps } from 'rn-base-component'
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import { TextInput } from '../TextInput'
import { Images, metrics } from '@/themes'
import { getString, TranslationKey } from '@/locale/I18nConfig'

interface IProps<T extends object> extends Omit<TextInputProps, 'secureTextEntry' | 'rightComponent'> {
  control: Control<T>
  id: Path<T>
  showIcon?: ImageSourcePropType
  hideIcon?: ImageSourcePropType
}

export const FormPasswordInput = <T extends object>({
  control,
  id,
  showIcon = Images.eye,
  hideIcon = Images.eyeHide,
  ...rest
}: IProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev)
  }, [])

  const renderPasswordEyeIcon = useCallback(
    () => (
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
        <Image source={showPassword ? showIcon : hideIcon} style={styles.eyeIcon} />
      </TouchableOpacity>
    ),
    [showPassword, togglePasswordVisibility, showIcon, hideIcon],
  )

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextInput
          {...rest}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          errorText={getString(error?.message as TranslationKey)}
          secureTextEntry={!showPassword}
          rightComponent={renderPasswordEyeIcon()}
        />
      )}
      name={id}
    />
  )
}

const styles = StyleSheet.create({
  eyeIconContainer: {
    padding: metrics.tiny,
  },
  eyeIcon: {
    width: metrics.small,
    height: metrics.small,
    aspectRatio: 1,
  },
})
