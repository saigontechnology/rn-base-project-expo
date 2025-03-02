import {FIELD_TYPES, IFormField} from '@/constants/interface/field'
import {IHomeForm} from '@/schemas/home'

export const HOME_FIELDS: IFormField<IHomeForm>[] = [
  {
    key: 'name',
    label: 'demoForm.name',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    editable: true,
    componentProps: {
      autoCapitalize: 'none',
    },
  },
  {
    key: 'date',
    label: 'demoForm.date',
    fieldType: FIELD_TYPES.date,
    isRequire: true,
    editable: true,
  },
  {
    key: 'selectItem',
    label: 'demoForm.selectItem',
    fieldType: FIELD_TYPES.select,
    data: [
      {label: 'Item 1', value: '1'},
      {label: 'Item 2', value: '2'},
    ],
    isRequire: true,
    editable: true,
  },
  {
    key: 'chipSelect',
    label: 'demoForm.chipSelect',
    fieldType: FIELD_TYPES.chip_select,
    data: [
      {label: 'Item 1', value: '1'},
      {label: 'Item 2', value: '2'},
    ],
    isRequire: true,
    editable: true,
  },
]
