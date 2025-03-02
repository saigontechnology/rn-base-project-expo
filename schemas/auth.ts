import {getString} from '@/locale/I18nConfig'
import {z, ZodType} from 'zod'

export interface ISignInForm {
  email: string
  password: string
}

export const SignInSchema: ZodType<ISignInForm> = z.object({
  email: z
    .string({message: getString('validations.required', {field: getString('auth.email')})})
    .email({message: getString('auth.validation.email')}),
  password: z
    .string({message: getString('validations.required', {field: getString('auth.password')})})
    .min(8, {message: getString('auth.validation.password')}),
})
