import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'rn-base-component'
import { colors, fontSizes, fonts, metrics } from '../themes'
import { IOptions } from '@/constants/interface/selection'

export interface IChipSelectionProps {
  data?: IOptions[]
  label?: string
  value?: string
  onSelected?: (value: string) => void
}

export const ChipSelection: React.FC<IChipSelectionProps> = ({ data, label, value, onSelected }) => (
  <View style={styles.container}>
    <Text fontSize={fontSizes.span} fontFamily={fonts.medium}>
      {label}
    </Text>
    <View style={styles.chipContainer}>
      {data?.map(item => {
        const isSelected = item.value === value
        return (
          <TouchableOpacity
            key={item.value}
            style={[styles.item, isSelected && styles.selectedItem]}
            onPress={() => onSelected?.(item.value)}>
            <Text
              fontSize={fontSizes.small}
              fontFamily={fonts.medium}
              color={isSelected ? colors.white : colors.primary}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: metrics.small,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: metrics.xxs,
    marginTop: metrics.small,
  },
  item: {
    borderWidth: metrics.borderWidth,
    borderRadius: metrics.tiny,
    borderColor: colors.primary,
    paddingVertical: metrics.xxs,
    paddingHorizontal: metrics.small,
  },
  selectedItem: {
    backgroundColor: colors.primary,
  },
})
