import { action } from 'typesafe-actions'
import { AuthTypes, Auth, AuthSuccess } from './types'

export const signIn = (data: Auth) => action(AuthTypes.SIGN_IN, data)

export const signOut = () => action(AuthTypes.SIGN_OUT)

export const loadSuccess = (data: AuthSuccess) => action(AuthTypes.LOAD_SUCCESS, data)

export const loadFailure = () => action(AuthTypes.LOAD_FAILURE)

export const validToken = () => action(AuthTypes.VALIDATE_TOKEN)