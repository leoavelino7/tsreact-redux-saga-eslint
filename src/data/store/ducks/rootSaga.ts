import { all, takeLatest } from 'redux-saga/effects'

import { signIn } from './auth/sagas'
import { AuthTypes } from './auth/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN, signIn)
  ])
}