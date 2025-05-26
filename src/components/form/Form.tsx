/* eslint-disable no-case-declarations */
import React from 'react'
import { FormSelection } from './FormSelection'
import { FIELD_TYPES, IFormField } from '@/constants/interface/field'
import { getString } from '@/locale/I18nConfig'
import { Control, FieldValues } from 'react-hook-form'
import { FormInput } from './FormInput'
import { FormDatePicker } from './FormDatePicker'
import { FormChipSelection } from './FormChipSelection'
import { ISelectionProps } from '@/constants/interface/selection'
import { TextInputProps } from 'rn-base-component'
import { IDatePickerProps } from '../DatePicker'

interface IProps<T extends FieldValues> {
  control: Control<T>
  fields: IFormField<T>[]
}

export const Form = <T extends FieldValues>({ control, fields }: IProps<T>) => (
  <>
    {fields.map(item => {
      switch (item.fieldType) {
        case FIELD_TYPES.select:
          return (
            <FormSelection
              {...item}
              {...(item.componentProps as ISelectionProps<T>)}
              id={item.key}
              key={item.key}
              control={control}
              data={item.data}
              label={getString(item.label)}
              placeholder={item.placeholder ? getString(item.placeholder) : ''}
            />
          )
        case FIELD_TYPES.chip_select:
          return (
            <FormChipSelection
              {...item}
              {...(item.componentProps as ISelectionProps<T>)}
              id={item.key}
              key={item.key}
              control={control}
              data={item.data}
              label={getString(item.label)}
            />
          )
        case FIELD_TYPES.input:
          return (
            <FormInput
              {...item}
              {...(item.componentProps as TextInputProps)}
              id={item.key}
              key={item.key}
              control={control}
              editable={!item.disabled}
              label={getString(item.label)}
              placeholder={item.placeholder ? getString(item.placeholder) : ''}
            />
          )
        case FIELD_TYPES.date:
          return (
            <FormDatePicker<T>
              {...item}
              {...(item.componentProps as IDatePickerProps)}
              id={item.key}
              key={item.key}
              control={control}
              label={getString(item.label)}
              placeholder={item.placeholder ? getString(item.placeholder) : ''}
            />
          )
        default:
          const { CustomComponent } = item
          return CustomComponent ? <CustomComponent key={item.key} control={control} /> : null
      }
    })}
  </>
)
