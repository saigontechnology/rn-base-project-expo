import React, {FC, ReactNode, useCallback, useMemo, useRef, useState} from 'react'
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import {getApplicationName, getBuildNumber, getDeviceId} from 'react-native-device-info'
import {Draggable} from './Draggable'

import Config, {EXTRA_QA_ENVS} from '../../constants/configs'

import {InfoMenu, InfoMenuLink, InfoMenuRow} from './InfoMenu'

import {colors, fonts, metrics} from '@/themes'
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types'
import {useSelector} from 'react-redux'
import {getString} from '@/locale/I18nConfig'
import {getApiUrl} from '@/stores/selectors'

interface Props {
  title: string
  children?: ReactNode
}

const DEBUGMENU_SIZE = 50

const AppInfoSection: FC = () => {
  const appName = useMemo(() => getApplicationName(), [])
  const buildNumber = useMemo(() => getBuildNumber(), [])
  const deviceId = useMemo(() => getDeviceId(), [])

  const infos = useMemo(
    () => [
      {key: '0', title: getString('deviceId'), description: deviceId},
      {key: '1', title: getString('appName'), description: appName},
      {key: '2', title: getString('buildNumber'), description: buildNumber},
      {key: '3', title: getString('appVersion'), description: Config.appVersion},
      {key: '4', title: getString('bundleId'), description: Config.appBundleID},
      {key: '5', title: getString('appEnv'), description: Config.APP_ENV || 'N/A'},
    ],
    [appName, buildNumber, deviceId],
  )

  return (
    <View style={styles.section}>
      <Text style={styles.h3}>{getString('info')}</Text>
      <View style={styles.content}>
        {infos.map(({key, title, description}) => (
          <InfoMenuRow key={key} style={styles.infoMenu} title={title} description={description} />
        ))}
      </View>
    </View>
  )
}

const EnvironmentSection: FC<Props> = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.h3}>{title}</Text>
    <View style={styles.content}>{children}</View>
  </View>
)

export const DebugMenu: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = useCallback(() => setModalVisible(true), [])
  const closeModal = useCallback(() => setModalVisible(false), [])

  const currentApiUrl = useSelector(getApiUrl)

  const dimensions = useWindowDimensions()

  const bottomSheetRef = useRef<BottomSheetMethods>(null)

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index)
  }, [])

  const openEnvironmentBottomSheet = useCallback(() => {
    closeModal()
    handleSnapPress(0)
  }, [closeModal, handleSnapPress])

  return (
    <>
      <Draggable
        isCircle
        renderColor={colors.primary}
        renderSize={DEBUGMENU_SIZE}
        animatedViewProps={{height: dimensions.height}}
        x={dimensions.width - DEBUGMENU_SIZE * 1.5}
        y={dimensions.height - DEBUGMENU_SIZE * 2}
        renderText={Config.appVersion}
        onShortPressRelease={openModal}
      />
      <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={closeModal}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Button color={colors.primary} onPress={closeModal} title={getString('close')} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <AppInfoSection />
            <EnvironmentSection title={getString('testingEnvironment')}>
              {EXTRA_QA_ENVS.length ? (
                <InfoMenuLink
                  style={styles.infoMenu}
                  title={getString('current')}
                  description={currentApiUrl as string}
                  linkTitle={getString('update')}
                  onPress={openEnvironmentBottomSheet}
                />
              ) : (
                <InfoMenu
                  style={styles.infoMenu}
                  title={getString('current')}
                  description={currentApiUrl as string}
                />
              )}
            </EnvironmentSection>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollContent: {
    paddingHorizontal: metrics.xxs,
  },
  section: {
    marginTop: metrics.large,
  },
  content: {
    marginVertical: metrics.xxs,
  },
  infoMenu: {
    marginTop: metrics.small,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    padding: metrics.xs,
  },
  flatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: metrics.xs,
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flatListItemTitle: {
    flex: 1,
    marginRight: metrics.xxs,
  },
  flatListItemIcon: {
    width: metrics.large,
    height: metrics.large,
    backgroundColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.xs,
  },
  h3: {
    fontFamily: fonts.bold,
  },
  environmentText: {color: colors.black, fontWeight: 'normal'},
  active: {color: colors.primary, fontWeight: 'bold'},
})
