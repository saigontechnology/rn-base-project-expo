import React, { useCallback } from 'react'
import { Image, StyleSheet } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Images, metrics } from '@/themes'
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

export const SignInScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm<IUserSignInPayload>({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = useCallback(
    (data: IUserSignInPayload) => {
      dispatch(userActions.userLogin())
    },
    [dispatch],
  )
  return (
    <ThemedView style={styles.container}>
      <Image source={Images.sts} style={styles.logo} />
      <ThemedText type="title" style={styles.title}>
        {getString('auth.title')}
      </ThemedText>
      <Form<IUserSignInPayload> fields={SIGNIN_FIELDS} control={control} />
      <ButtonPrimary onPress={() => handleSubmit(onSubmit)()}>{getString('auth.signIn')}</ButtonPrimary>
    </ThemedView>
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
  },
  logo: {
    width: metrics.logoHeight,
    height: metrics.logoHeight,
  },
})
