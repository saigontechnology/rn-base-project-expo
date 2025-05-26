import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { ChipSelection, IChipSelectionProps } from '../ChipSelection'

interface IProps<T extends object> extends IChipSelectionProps {
  control: Control<T>
  id: Path<T>
}

export const FormChipSelection = <T extends object>({ control, id, ...rest }: IProps<T>) => (
  <Controller
    control={control}
    render={({ field: { onChange, value } }) => (
      <ChipSelection {...rest} onSelected={onChange} value={value} />
    )}
    name={id}
  />
)
