import {z, ZodType} from 'zod'

export interface IHomeForm {
  name: string
  date: string
  selectItem: string
  chipSelect: string
}

export const HomeSchema: ZodType<IHomeForm> = z.object({
  name: z.string(),
  date: z.string(),
  selectItem: z.string(),
  chipSelect: z.string(),
})
