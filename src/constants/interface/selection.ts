import { IBottomSheetProps } from '@/components/BottomSheet'
import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface IOptions {
  label: string
  value: string
}

export interface ISelectionProps<T extends object> extends Pick<IBottomSheetProps, 'snapPoints'> {
  data: T[] | IOptions[] | undefined
  renderItem?: (item: T | IOptions) => ReactNode
  onItemSelected?: (item: T | IOptions | string | boolean) => void
  label: string
  value?: string
  placeholder?: string
  children?: ReactNode | undefined
  leftComponent?: ReactNode | undefined
  containerStyle?: StyleProp<ViewStyle>
  dropdownWrapperStyle?: StyleProp<ViewStyle>
  isRequire?: boolean
  getTitle?: (item: T | IOptions) => string | ReactNode
  getValue?: (item: T | IOptions) => string | boolean
  hasSearch?: boolean
  disabled?: boolean
  flatListContainerStyle?: StyleProp<ViewStyle>
}
