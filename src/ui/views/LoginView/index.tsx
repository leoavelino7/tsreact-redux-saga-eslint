import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ApplicationState } from '../../../data/store'

import * as AuthActions from '../../../data/store/ducks/auth/actions'

import { IRouteProps } from '../../routes'

export const LoginView: React.FC<IRouteProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const isLoading = useSelector((state: ApplicationState) => state.auth.loading)
  const error = useSelector((state: ApplicationState) => state.auth.error)
  const token = useSelector((state: ApplicationState) => state.auth.token)

  const [username, setUsername] = useState('Leonardo')
  const [password, setPassword] = useState('123456')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(AuthActions.signIn({username, password}))
  }

  useEffect(() => {
    if(token){
      history.push('/dashboard')
    }
  }, [history, token])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button>Logar</button>
        {isLoading && <h5>Enviando...</h5>}
        {error && <h4>Erro!!!</h4>}
      </form>
    </div>
  )
}