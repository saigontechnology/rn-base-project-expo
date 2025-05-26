import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { DatePicker, IDatePickerProps } from '../DatePicker'

interface IProps<T extends object> extends IDatePickerProps {
  control: Control<T>
  id: Path<T>
}

export const FormDatePicker = <T extends object>({ control, id, ...rest }: IProps<T>) => (
  <Controller
    control={control}
    render={({ field: { onChange, value } }) => <DatePicker {...rest} onConfirm={onChange} value={value} />}
    name={id}
  />
)
