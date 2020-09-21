import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  username: '',
  password: '',
  token: sessionStorage.getItem(AuthTypes.TOKEN_STORAGE) || '',
  valid: false,
  loading: false,
  error: false
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AuthTypes.SIGN_IN:
      return { ...state, loading: true }

    case AuthTypes.SIGN_OUT:
      sessionStorage.removeItem(AuthTypes.TOKEN_STORAGE)
      return {...state, username: '', password: '', token: '', valid: false, loading: false, error: false};

    case AuthTypes.VALIDATE_TOKEN:
      return {...state, loading: false, valid: true}
      
    case AuthTypes.LOAD_SUCCESS:
      sessionStorage.setItem(AuthTypes.TOKEN_STORAGE, action.payload.token)
      return {...state, loading: false, error: false, valid: true, token: action.payload.token}

    case AuthTypes.LOAD_FAILURE:
      return {...state, loading: false, error: true }
    
    default:
      return state
    }
}

export default reducer