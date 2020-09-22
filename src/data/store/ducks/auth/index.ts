import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  username: '',
  password: '',
  token: window.localStorage.getItem(AuthTypes.TOKEN_STORAGE) || '',
  valid: false,
  configurations: [],
  loading: false,
  error: false
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AuthTypes.SIGN_IN:
      return { ...state, loading: true }

    case AuthTypes.SIGN_OUT:
      window.localStorage.removeItem(AuthTypes.TOKEN_STORAGE)
      window.localStorage.removeItem(AuthTypes.PERMISSIONS)
      return {...state, username: '', password: '', token: '', valid: false, configurations: [], loading: false, error: false};

    case AuthTypes.VALIDATE_TOKEN:
      return {...state, loading: false, valid: true}

    case AuthTypes.LOAD_SUCCESS:
      window.localStorage.setItem(AuthTypes.TOKEN_STORAGE, action.payload.token)
      window.localStorage.setItem(AuthTypes.PERMISSIONS, JSON.stringify(action.payload.configurations))
      return {...state, loading: false, error: false, valid: true, token: action.payload.token, configurations: action.payload.configurations}

    case AuthTypes.LOAD_FAILURE:
      return {...state, loading: false, error: true }
    
    default:
      return state
    }
}

export default reducer