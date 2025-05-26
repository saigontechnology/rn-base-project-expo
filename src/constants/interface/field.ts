import { TranslationKey } from '../../locale/I18nConfig'
import { Control, Path } from 'react-hook-form'
import { TextInputProps } from 'rn-base-component'
import { IDatePickerProps } from '@/components'
import { IOptions, ISelectionProps } from './selection'
import { ValueOf } from '../../../custom-types'

export const FIELD_TYPES = {
  input: 'input',
  date: 'date',
  select: 'select',
  chip_select: 'chip_select',
  custom: 'custom',
} as const

export type FieldType = ValueOf<typeof FIELD_TYPES>

export interface IFormField<T extends object> {
  key: Path<T>
  label: TranslationKey
  fieldType: FieldType
  placeholder?: TranslationKey
  disabled?: boolean
  isRequire?: boolean
  data?: IOptions[]
  componentProps?: TextInputProps | IDatePickerProps | ISelectionProps<T>
  CustomComponent?: React.FC<{ control: Control<T> }>
}
