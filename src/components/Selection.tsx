import React, { useCallback, useMemo, useRef, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, TextInput } from 'rn-base-component'
import { BottomSheet, BottomSheetMethods } from './BottomSheet'
import { colors, fonts, fontSizes, metrics } from '@/themes'
import { IOptions, ISelectionProps } from '@/constants/interface/selection'
import { getString } from '@/locale/I18nConfig'
import { IconSymbol } from './IconSymbol'

export const Selection = <T extends object>({
  data,
  renderItem,
  onItemSelected,
  label,
  children,
  value,
  placeholder,
  leftComponent,
  containerStyle,
  dropdownWrapperStyle,
  isRequire,
  getTitle,
  getValue,
  snapPoints = ['50%'],
  hasSearch,
  disabled,
  flatListContainerStyle,
}: ISelectionProps<T>) => {
  const ref = useRef<BottomSheetMethods>(null)

  const [searchText, setSearchText] = useState('')

  const renderDefaultItem = useCallback(
    ({ item }: { item: T | IOptions }) => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          onItemSelected?.(getValue ? getValue(item) : (item as IOptions).value)
          ref.current?.close()
        }}>
        {renderItem ? (
          renderItem(item)
        ) : getTitle ? (
          <Text>{getTitle(item)}</Text>
        ) : (
          <Text>{(item as IOptions).label}</Text>
        )}
      </TouchableOpacity>
    ),
    [getTitle, getValue, onItemSelected, renderItem],
  )

  const renderChildren = useCallback(() => {
    if (!children) {
      const item = data?.find(dataItem =>
        getValue ? getValue(dataItem) === value : (dataItem as IOptions).value === value,
      )
      return item ? (
        <Text numberOfLines={1} style={styles.childrenText}>
          {getTitle ? getTitle(item) : (item as IOptions).label}
        </Text>
      ) : (
        <Text color={colors.black} style={styles.childrenText}>
          {placeholder}
        </Text>
      )
    }
    return children
  }, [children, data, getTitle, placeholder, getValue, value])

  const handleOpen = useCallback(() => {
    ref.current?.open()
    setSearchText('')
  }, [])

  const dataFiltered = useMemo(() => {
    if (searchText === '') {
      return data
    }
    return data?.filter(item => (item as IOptions).label.toLowerCase().includes(searchText.toLowerCase()))
  }, [searchText, data])

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {!!label && (
          <Text style={styles.labelStyle}>
            {label}
            {!!isRequire && <Text style={styles.required}> *</Text>}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleOpen}
          style={[styles.wrapper, dropdownWrapperStyle, disabled && styles.disabled]}
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
      </View>
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        {hasSearch && (
          <TextInput.Outlined
            placeholder={getString('search')}
            onChangeText={setSearchText}
            value={searchText}
          />
        )}
        <FlatList<T | IOptions>
          data={dataFiltered}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderDefaultItem}
          style={styles.listContainer}
          contentContainerStyle={flatListContainerStyle}
        />
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  childrenText: {
    fontSize: metrics.span,
    fontFamily: fonts.medium,
  },
  container: {
    marginBottom: metrics.marginTop,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  listContainer: {
    marginBottom: metrics.marginTop,
  },
  itemContainer: {
    height: metrics.textInputHeight,
    justifyContent: 'center',
    borderBottomWidth: metrics.borderWidth,
    borderColor: colors.border,
  },
  wrapper: {
    borderWidth: metrics.borderWidth,
    height: metrics.textInputHeight,
    paddingHorizontal: metrics.marginVertical,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.white,
    borderColor: colors.border,
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
  icon: {
    width: metrics.small,
    height: metrics.small,
    marginLeft: metrics.tiny,
  },
  required: {
    color: colors.red,
  },
  disabled: {
    backgroundColor: colors.border,
  },
})
