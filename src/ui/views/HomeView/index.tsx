import React from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import dotenv from 'dotenv'

import { decryptionWithCryptoJS } from '~/data/services/CryptoService/Aes'

import { ApplicationState } from '~/data/store'
import * as AuthActions from '~/data/store/ducks/auth/actions'

import { IRouteProps } from '~/ui/routes'

import { Navbar } from '~/ui/components/Navbar'
import { ThemeButton } from '~/ui/components/ThemeButton'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
})

export const HomeView = ({ changeLanguage }: IRouteProps) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const intl = useIntl()

  const token = useSelector((state: ApplicationState) => {
    return decryptionWithCryptoJS(process.env.REACT_APP_STORAGE_KEY, state.auth.token)
  })

  const handleSelectItem = (href: string) => {
    if (href === '/') {
      handleSignOut()
    } else {
      history.push(href)
    }
  }

  const handleSignOut = () => {
    dispatch(AuthActions.signOut())
    history.push('/')
  }

  return (
    <div>
      <Navbar onHandleSelectItem={handleSelectItem} />
      <button onClick={() => changeLanguage('pt')}>Mudar para pt</button>
      <button onClick={() => changeLanguage('en')}>Mudar para en</button>

      <h1>{intl.messages.HI}</h1>
      <h1>Token {token}</h1>
      <ThemeButton />
    </div>
  )
}
