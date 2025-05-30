import { Dimensions, Platform } from 'react-native'

const DESIGN_WIDTH = 375
const DESIGN_HEIGHT = 812
const { width, height } = Dimensions.get('window')

function responsiveWidth<T extends number>(value: T) {
  return ((width * value) / DESIGN_WIDTH) as T
}

function responsiveHeight<T extends number>(value: T) {
  return ((height * value) / DESIGN_HEIGHT) as T
}

function responsiveFont<T extends number>(value: T) {
  return ((width * value) / DESIGN_WIDTH) as T
}

function deviceWidth(): number {
  return width
}

function deviceHeight(): number {
  return height
}

const isIOS = Platform.OS === 'ios'

const shadow = {
  shadowColor: '#000',
  shadowRadius: 5,
  elevation: 5,
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 3 },
} as const

const hitSlop = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10,
} as const

const metrics = {
  // Text Size
  title: responsiveFont(20),
  span: responsiveFont(14),

  // spacing
  zero: responsiveHeight(0),
  tiny: responsiveHeight(4),
  xxs: responsiveHeight(8),
  xs: responsiveHeight(12),
  small: responsiveHeight(16),
  sMedium: responsiveHeight(18),
  medium: responsiveHeight(20),
  large: responsiveHeight(24),
  xl: responsiveHeight(28),
  xxl: responsiveHeight(32),
  huge: responsiveHeight(48),
  massive: responsiveHeight(64),

  borderWidth: responsiveHeight(1),
  borderRadius: responsiveHeight(5),
  borderRadiusLarge: responsiveHeight(10),
  borderRadiusHuge: responsiveHeight(20),
  // margin
  marginTop: responsiveHeight(12),
  marginHorizontal: responsiveWidth(24),
  marginVertical: responsiveWidth(16),
  paddingHorizontal: responsiveWidth(20),

  voucherBorderRadius: responsiveHeight(15),
  logoWidth: responsiveWidth(300),
  logoHeight: responsiveHeight(70),
  icon: responsiveHeight(30),
  toast: responsiveHeight(44),
  textInputHeight: responsiveHeight(44),
} as const

const fontSizes = {
  small: responsiveFont(12),
  span: responsiveFont(14),
  body: responsiveFont(16),
  large: responsiveFont(18),
  title: responsiveFont(20),
} as const

const fontWeights = {
  bold: '700',
  semiBold: '600',
} as const

export {
  metrics,
  fontSizes,
  fontWeights,
  isIOS,
  shadow,
  hitSlop,
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
  deviceWidth,
  deviceHeight,
}
