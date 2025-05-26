import { TextInput as BaseTextInput, TextInputProps } from 'rn-base-component'
import React, { useCallback, useState } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors, fonts, fontSizes, Images, metrics } from '@/themes'

export const TextInput: React.FC<TextInputProps> = ({
  secureTextEntry,
  rightComponent,
  errorText,
  containerStyle,
  editable = true,
  inputContainerStyle,
  style,
  ...rest
}) => {
  const [isFocus, setFocus] = useState(false)
  const [showText, setShowText] = useState<boolean>(!!secureTextEntry)
  const handleEyePressed = useCallback(() => {
    setShowText(prevState => !prevState)
  }, [])

  return (
    <BaseTextInput
      rightComponent={
        secureTextEntry ? (
          <TouchableOpacity onPress={handleEyePressed}>
            <Image
              source={showText ? Images.eye : Images.eyeHide}
              style={errorText ? styles.errorIcon : styles.eyeIcon}
            />
          </TouchableOpacity>
        ) : (
          rightComponent
        )
      }
      {...rest}
      editable={editable}
      errorText={errorText}
      secureTextEntry={secureTextEntry && showText}
      containerStyle={[styles.container, containerStyle]}
      inputContainerStyle={[
        styles.wrapper,
        inputContainerStyle,
        isFocus && styles.focusView,
        !!errorText && styles.outlineError,
        !editable && styles.disabled,
      ]}
      inputStyle={styles.textInput}
      labelStyle={[styles.labelStyle, !!errorText && styles.labelError]}
      style={[styles.input, style]}
      placeholderTextColor={colors.black}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      errorProps={{ style: styles.error }}
      selectionColor={errorText ? colors.red : colors.primary}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: metrics.marginTop,
  },
  textInput: {
    fontSize: fontSizes.span,
    fontFamily: fonts.medium,
  },
  wrapper: {
    borderWidth: metrics.borderWidth,
    height: metrics.textInputHeight,
    paddingHorizontal: metrics.marginVertical,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.white,
  },
  labelStyle: {
    fontSize: metrics.span,
    marginBottom: metrics.tiny,
    fontFamily: fonts.medium,
  },
  input: {
    fontSize: fontSizes.span,
    fontFamily: fonts.medium,
  },
  eyeIcon: {
    width: metrics.medium,
    height: metrics.medium,
    tintColor: colors.primary,
    marginRight: metrics.tiny,
    resizeMode: 'contain',
  },
  errorIcon: {
    width: metrics.medium,
    height: metrics.medium,
    tintColor: colors.red,
    marginRight: metrics.tiny,
    resizeMode: 'contain',
  },
  error: {
    fontSize: fontSizes.small,
    color: colors.error,
    fontFamily: fonts.regular,
    textAlign: 'right',
    marginTop: metrics.tiny,
  },
  labelError: {
    color: colors.red,
  },
  outlineError: {
    borderColor: colors.error,
  },
  focusView: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.gray,
  },
})
