import { all, takeLatest } from 'redux-saga/effects'

import { signIn, validateToken } from './auth/sagas'
import { AuthTypes } from './auth/types'

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN, signIn),
    takeLatest(AuthTypes.VALIDATE_TOKEN, validateToken)
  ])
}