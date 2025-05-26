import { ISelectionProps } from '@/constants/interface/selection'
import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { Selection } from '@/components'

interface IProps<T extends object, Q extends object> extends ISelectionProps<Q> {
  control: Control<T>
  id: Path<T>
}

export const FormSelection = <T extends object, Q extends object>({
  control,
  id,
  onItemSelected,
  ...rest
}: IProps<T, Q>) => (
  <Controller
    control={control}
    render={({ field: { onChange, value } }) => (
      <Selection<Q>
        {...rest}
        onItemSelected={item => {
          onChange(item)
          onItemSelected?.(item)
        }}
        value={value}
      />
    )}
    name={id}
  />
)
