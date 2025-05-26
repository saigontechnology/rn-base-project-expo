import { getString } from '@/locale/I18nConfig'
import { IUserSignInPayload } from '@/stores/types'
import { ZodType, z } from 'zod'

export const SignInSchema: ZodType<IUserSignInPayload> = z.object({
  email: z
    .string({ required_error: getString('validations.required', { field: getString('auth.email') }) })
    .email({ message: getString('auth.validation.email') }),
  password: z
    .string({ required_error: getString('validations.required', { field: getString('auth.password') }) })
    .min(8, { message: getString('auth.validation.password') }),
})
