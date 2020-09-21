import { call, put } from 'redux-saga/effects'

import { loadSuccess, loadFailure, signOut } from './actions'

/**
 * Mocks
 */
function mockSignIn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: {token: 'wertyuiop'}}), 2000)
  })
}

function mockCheckToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: {valid: true }}), 1000)
  })
}

/**
 * Sagas
 */
export function* signIn() {
  try {
    const response = yield call(mockSignIn)

    yield put(loadSuccess(response.data))
  } catch (err) {
    yield put(loadFailure())
  }
}

export function* validateToken() {
  try {
    yield call(mockCheckToken)
  } catch (err) {
    yield put(signOut())
  }
}