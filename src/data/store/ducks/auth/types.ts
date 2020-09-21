/**
 * Action types
 */
export enum AuthTypes {
  'SIGN_IN' = '@auth/SIGN_IN',
  'SIGN_OUT' = '@auth/SIGN_OUT',
  'VALIDATE_TOKEN' = '@auth/VALIDATE_TOKEN',
  'LOAD_SUCCESS' = '@auth/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@auth/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface Auth {
  username: string
  password: string
}

export interface AuthSuccess {
  token: string
}

/**
 * State type
 */
export interface AuthState {
  username: string
  password: string
  readonly token: string
  readonly valid: boolean
  readonly loading: boolean
  readonly error: boolean
}