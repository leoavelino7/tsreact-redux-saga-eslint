import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ApplicationState } from '../../../data/store'

import * as AuthActions from '../../../data/store/ducks/auth/actions'

export const HomeView = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const token = useSelector((state: ApplicationState) => state.auth.token)

  function handleSignOut() {
    dispatch(AuthActions.signOut())
    history.push('/')
  }

  return (
    <div>
      <br />
      <h1>Token {token}</h1>
      <br/>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  )
}