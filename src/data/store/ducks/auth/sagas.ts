import { call, put } from 'redux-saga/effects'

import { loadFailure, loadSuccess, signOut } from './actions'

/**
 * Mocks
 */
const TIME_TO_RUN_MOCKS = 200

function mockSignIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'wertyuiop',
          configurations: [
            {
              service: 'App1',
              rules: [{ role: 'admin', rights: ['CAN_VIEW_HOME'] }],
            },
          ],
        },
      })
    }, TIME_TO_RUN_MOCKS)
  })
}

function mockCheckToken() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { valid: true } }), TIME_TO_RUN_MOCKS)
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
    const response = yield call(mockCheckToken)

    if (!response?.data?.valid) {
      throw new Error('Invalid token')
    }
  } catch (err) {
    yield put(signOut())
  }
}
