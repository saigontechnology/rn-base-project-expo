const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

const colors = {
  primary: '#65c8c6',
  black: '#1F1F1F',
  white: '#ffffff',
  gray: '#454545',
  red: '#ff0009',
  error: '#FF5247',
  success: '#23C16B',
  warning: '#FFB323',
  info: '#48A7F8',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
} as const

const getColorOpacity = (color: string, opacity: number): string => {
  if (opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16)
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`
  }
  return color
}

export {colors, getColorOpacity}
