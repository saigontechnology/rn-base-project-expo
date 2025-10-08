import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { getString } from '../locale/I18nConfig'
import { TextInputProps } from 'rn-base-component'
import { TextInput } from './TextInput'
import { Images, metrics } from '@/themes'

interface Props extends TextInputProps {
  hasSearchIcon?: boolean
  searchIconStyle?: StyleProp<ImageStyle>
}

export const SearchBar = ({
  inputContainerStyle,
  hasSearchIcon = true,
  placeholder = getString('search'),
  searchIconStyle,
  ...rest
}: Props) => (
  <TextInput
    inputContainerStyle={[styles.container, inputContainerStyle]}
    placeholder={placeholder}
    leftComponent={
      hasSearchIcon && <Image source={Images.search} style={[styles.searchIcon, searchIconStyle]} />
    }
    autoCorrect={false}
    returnKeyType="search"
    {...rest}
  />
)

const styles = StyleSheet.create({
  container: {
    height: metrics.textInputHeight,
    borderRadius: metrics.borderRadius,
  },
  searchIcon: {
    width: metrics.medium,
    height: metrics.medium,
    marginRight: metrics.xxs,
    resizeMode: 'contain',
  },
})
