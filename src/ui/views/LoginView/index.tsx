import React, { useContext, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Grid, LinearProgress } from '@material-ui/core'

import { ApplicationState } from '~/data/store'
import * as AuthActions from '~/data/store/ducks/auth/actions'

import { CustomThemeContext } from '~/ui/providers/CustomThemeProvider'

import { IRouteProps } from '~/ui/routes'

import { Login } from '~/ui/components/Login'
import MessageSnackbar from '~/ui/components/MessageSnackbar'

import { LogoImage } from './styles'

export const LoginView: React.FC<IRouteProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { configTheme } = useContext(CustomThemeContext)
  const intl = useIntl()

  const isLoading = useSelector((state: ApplicationState) => state.auth.loading)
  const error = useSelector((state: ApplicationState) => state.auth.error)

  const token = useSelector((state: ApplicationState) => state.auth.token)

  const handleSubmit = (username: string, password: string) => {
    dispatch(AuthActions.signIn({ username, password }))
  }

  useEffect(() => {
    if (token) {
      history.push('/dashboard')
    }
  }, [history, token])

  return (
    <Grid style={{ backgroundColor: configTheme.palette.primary.main }}>
      <LogoImage src="https://via.placeholder.com/100x70" />
      <Login
        titleForm={intl.messages.FORM_LOGIN_TITLE.toString()}
        titleUsername={intl.messages.FORM_LOGIN_TITLE_USERNAME.toString()}
        titlePassword={intl.messages.FORM_LOGIN_TITLE_PASSWORD.toString()}
        titleLoginButton={intl.messages.FORM_LOGIN_TITLE_BUTTON_LOGIN.toString()}
        titleForgetPasswordButton={intl.messages.FORM_LOGIN_TITLE_BUTTON_FORGET_PASSWORD.toString()}
        onHandleSubmit={handleSubmit}
      >
        {isLoading && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <LinearProgress color="secondary" />
            </Grid>
          </Grid>
        )}
      </Login>
      <MessageSnackbar message={'Dados incorretos'} isOpen={!!error} />
    </Grid>
  )
}
