import dotenv from 'dotenv'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useIntl, FormattedDate} from 'react-intl'

import { ApplicationState } from '../../../data/store'
import * as AuthActions from '../../../data/store/ducks/auth/actions'

import { Sample } from '../../components/Sample'
import { ThemeButton } from '../../components/ThemeButton'

import { IRouteProps } from '../../routes'
import { decryptionWithCryptoJS } from '../../../data/services/CryptoService/Aes'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
})

export const HomeView = ({ changeLanguage }: IRouteProps) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const intl = useIntl()

  const token = useSelector((state: ApplicationState) => decryptionWithCryptoJS(process.env.REACT_APP_STORAGE_KEY, state.auth.token))
  
  function handleSignOut() {
    dispatch(AuthActions.signOut())
    history.push('/')
  }
  
  return (
    <div>
      <ThemeButton />
      <Sample />

      <button onClick={() => changeLanguage('pt')}>Mudar para pt</button>
      <button onClick={() => changeLanguage('en')}>Mudar para en</button>
      <br/>
      <br />
      <span title={intl.formatDate("12/06/1999")}>
        <FormattedDate value={"12/06/1999"} />
      </span>
      
      <h1>{intl.messages.HI}</h1>
      <h1>Token {token}</h1>
      <br/>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  )
}