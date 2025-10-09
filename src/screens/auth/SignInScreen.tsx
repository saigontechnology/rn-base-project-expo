import React, { useCallback } from 'react'
import { Image, Keyboard, StyleSheet } from 'react-native'

import { fonts, fontSizes, Images, metrics } from '@/themes'
import { getString } from '@/locale/I18nConfig'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/form'
import { SIGNIN_FIELDS } from './constants'
import { ButtonPrimary } from 'rn-base-component'
import { useAppDispatch } from '@/stores/store'
import { userActions } from '@/stores/reducers'
import { IUserSignInPayload } from '@/stores/types'
import { SignInSchema } from './signin.schema'
import { ScreenContainer } from '@/components'

export const SignInScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm<IUserSignInPayload>({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = useCallback(
    (data: IUserSignInPayload) => {
      Keyboard.dismiss()
      dispatch(userActions.userLogin())
    },
    [dispatch],
  )
  return (
    <ScreenContainer style={styles.container} title={getString('auth.title')}>
      <Image source={Images.sts} style={styles.logo} />
      <Form<IUserSignInPayload> fields={SIGNIN_FIELDS} control={control} />
      <ButtonPrimary onPress={() => handleSubmit(onSubmit)()}>{getString('auth.signIn')}</ButtonPrimary>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.medium,
  },
  title: {
    marginTop: metrics.small,
    marginBottom: metrics.large,
    fontFamily: fonts.bold,
    fontSize: fontSizes.title,
  },
  logo: {
    width: metrics.logoHeight,
    height: metrics.logoHeight,
  },
})
