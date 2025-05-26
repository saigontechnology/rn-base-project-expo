import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { TextInputProps } from 'rn-base-component'
import { formatWithSeparator } from '@/utilities/utils'
import { TextInput } from '../TextInput'

interface IProps<T extends object> extends TextInputProps {
  control: Control<T>
  id: Path<T>
  isCurrency?: boolean
}

export const FormInput = <T extends object>({ control, id, isCurrency, ...rest }: IProps<T>) => (
  <Controller
    control={control}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <TextInput
        {...rest}
        value={isCurrency ? formatWithSeparator(value, true) : value}
        onChangeText={onChange}
        onBlur={onBlur}
        errorText={error?.message}
      />
    )}
    name={id}
  />
)
