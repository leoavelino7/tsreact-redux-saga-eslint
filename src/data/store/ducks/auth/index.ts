import dotenv from 'dotenv'
import { Reducer } from 'redux'

import { encryptWithCryptoJS } from '~/data/services/CryptoService/Aes'

import { AuthState, AuthTypes } from './types'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.testing' : '.env',
})

const { REACT_APP_STORAGE_KEY } = process.env

const INITIAL_STATE: AuthState = {
  username: '',
  password: '',
  token: window.localStorage.getItem(AuthTypes.TOKEN_STORAGE) || '',
  valid: false,
  configurations: '',
  loading: false,
  error: false,
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN:
      return { ...state, loading: true }

    case AuthTypes.SIGN_OUT:
      window.localStorage.removeItem(AuthTypes.TOKEN_STORAGE)
      window.localStorage.removeItem(AuthTypes.PERMISSIONS)
      return {
        ...state,
        username: '',
        password: '',
        token: '',
        valid: false,
        configurations: '',
        loading: false,
        error: false,
      }

    case AuthTypes.VALIDATE_TOKEN:
      return { ...state, loading: false, valid: true }

    case AuthTypes.LOAD_SUCCESS:
      const token = encryptWithCryptoJS(REACT_APP_STORAGE_KEY, action.payload.token)
      const configurations = encryptWithCryptoJS(
        REACT_APP_STORAGE_KEY,
        JSON.stringify(action.payload.configurations)
      )

      window.localStorage.setItem(AuthTypes.TOKEN_STORAGE, token)
      window.localStorage.setItem(AuthTypes.PERMISSIONS, configurations)
      return { ...state, loading: false, error: false, valid: true, token, configurations }

    case AuthTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true }

    default:
      return state
  }
}

export default reducer
