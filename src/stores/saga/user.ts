import { AnyAction } from 'redux'
import { delay, put, takeLatest } from 'redux-saga/effects'
// import {Toast} from '../../components'
import { appActions, userActions } from '../reducers'
import { RouteKeys } from '@/routes/RouteKeys'
import { router } from 'expo-router'

function* userLoginSaga(): IterableIterator<AnyAction> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
    // TODO: login login
    yield delay(1000)
    router.navigate(RouteKeys.Home)
  } catch (e) {
    if (e instanceof Error) {
      // Toast.error(e.message)
    }
    router.navigate(RouteKeys.SignIn)
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userSignUpSaga(): IterableIterator<AnyAction> {
  try {
    yield put(appActions.setShowGlobalIndicator(true))
  } catch (e) {
    if (e instanceof Error) {
      // Toast.error(e.message)
    }
  } finally {
    yield put(appActions.setShowGlobalIndicator(false))
  }
}

function* userLogout() {
  // TODO: add logout function
}

export default [
  takeLatest(userActions.userLogin.type, userLoginSaga),
  takeLatest(userActions.userSignUp.type, userSignUpSaga),
  takeLatest(userActions.logout.type, userLogout),
]
