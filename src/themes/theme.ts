import { colors } from './colors'
import { metrics } from './metrics'
import { fonts } from './fonts'
import { extendTheme } from 'rn-base-component'

export const theme = extendTheme({
  fonts: fonts,
  colors: {
    primary: colors.primary,
    secondary: colors.warning,
    backgroundPrimary: colors.backgroundPrimary,
    backgroundSecondary: colors.backgroundSecondary,
    lightBackground: colors.white,
    mainBackground: colors.white,
    backgroundColor: colors.white,
    cardPrimaryBackground: colors.success,

    // border
    primaryBorder: colors.border,

    // text
    textColor: colors.black,
    lightTextColor: colors.white,
    darkTextColor: colors.gray,
    placeHolderText: colors.placeholder,
    errorText: colors.red,
  },
  darkColors: {
    primary: colors.primary,
    secondary: colors.warning,
    backgroundPrimary: colors.backgroundPrimary,
    backgroundSecondary: colors.backgroundSecondary,
    lightBackground: colors.black,
    mainBackground: colors.backgroundPrimary,
    backgroundColor: colors.backgroundPrimary,
    cardPrimaryBackground: colors.gray,

    // border
    primaryBorder: colors.border,

    // text
    textColor: colors.white,
    lightTextColor: colors.gray,
    darkTextColor: colors.white,
    placeHolderText: colors.placeholder,
    errorText: colors.red,
  },
  components: {
    Button: {
      height: metrics.huge,
      borderRadius: metrics.borderRadius,
    },
    ButtonPrimary: {
      backgroundColor: colors.primary,
      disabledColor: colors.disabled,
      borderRadius: metrics.tiny,
    },
    ButtonSecondary: {
      backgroundColor: colors.white,
      disabledColor: colors.gray,
      borderRadius: metrics.tiny,
      textColor: colors.primary,
    },
    ButtonOutline: {
      borderRadius: metrics.large,
    },
    Checkbox: {
      fillColor: colors.primary,
      size: metrics.medium,
    },
  },
})
