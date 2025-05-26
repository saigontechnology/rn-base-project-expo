import { AnyAction } from 'redux'
import { call, takeLatest } from 'redux-saga/effects'
import { appActions } from '../reducers'
import { getData } from '../../utilities/storage'
import { TOKEN } from '../../constants'
import { RouteKeys } from '@/routes/RouteKeys'
import { router } from 'expo-router'

function* getAppSettingSaga(): IterableIterator<AnyAction> {
  try {
    const token = yield call(getData, TOKEN.token)
    if (!token) {
      throw new Error('Token does not exist!')
    }
  } catch (e) {
    console.log(e)
    router.navigate(RouteKeys.SignIn)
  }
}

export default [takeLatest(appActions.getSettings.type, getAppSettingSaga)]
