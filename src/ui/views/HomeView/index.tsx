import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../../data/store'

import * as AuthActions from '../../../data/store/ducks/auth/actions'

export const HomeView = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: ApplicationState) => state.auth.token)

  function handleSignOut() {
    console.log('saindo...');
    dispatch(AuthActions.signOut())
  }

  useEffect(() => {
    if(!token){
      console.log('Logout com sucesso');
    }
  }, [token])

  return (
    <div>
      <br/>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  )
}