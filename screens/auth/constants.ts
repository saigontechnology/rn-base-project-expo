import {FIELD_TYPES, IFormField} from '@/constants/interface/field'
import {ISignInForm} from '@/schemas/auth'

export const SIGNIN_FIELDS: IFormField<ISignInForm>[] = [
  {
    key: 'email',
    label: 'auth.email',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    editable: true,
    componentProps: {
      autoCapitalize: 'none',
    },
  },
  {
    key: 'password',
    label: 'auth.password',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    editable: true,
    componentProps: {
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
  },
]
