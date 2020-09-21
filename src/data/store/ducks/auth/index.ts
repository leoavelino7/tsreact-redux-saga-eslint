import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  username: '',
  password: '',
  token: '',
  valid: false,
  loading: false,
  error: false
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AuthTypes.SIGN_IN:
      return { ...state, loading: true }

    case AuthTypes.SIGN_OUT:
      return INITIAL_STATE;

    case AuthTypes.VALIDATE_TOKEN:
      return {...state, loading: false}
      
    case AuthTypes.LOAD_SUCCESS:
      return {...state, loading: false, error: false, token: action.payload.token}

    case AuthTypes.LOAD_FAILURE:
      return {...state, loading: false, error: true }
    
    default:
      return state
    }
}

export default reducer