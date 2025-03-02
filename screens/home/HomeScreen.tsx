import React from 'react'
import {Link} from 'expo-router'
import {StyleSheet} from 'react-native'

import {ThemedText, ThemedView} from '@/components'
import {colors, metrics} from '@/themes'
import {RouteKeys} from '@/routes/RouteKeys'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {HomeSchema, IHomeForm} from '@/schemas/home'
import {Form} from '@/components/form'
import {HOME_FIELDS} from './constants'
import {getString} from '@/locale/I18nConfig'

export const HomeScreen: React.FC = () => {
  const {control} = useForm<IHomeForm>({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(HomeSchema),
  })

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title">{getString('demoForm.title')}</ThemedText>
        <Form<IHomeForm> fields={HOME_FIELDS} control={control} />
        <Link href={RouteKeys.SignIn} style={styles.link}>
          <ThemedText type="link" darkColor={colors.primary} lightColor={colors.primary}>
            {getString('auth.signOut')}
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.medium,
  },
  link: {
    marginTop: metrics.small,
    paddingVertical: metrics.small,
  },
})
