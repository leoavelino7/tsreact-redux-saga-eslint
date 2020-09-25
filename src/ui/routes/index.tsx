import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import { HomeView } from '~/ui/views/HomeView'
import { LoginView } from '~/ui/views/LoginView'

import { ApplicationState } from '~/data/store'
import * as AuthActions from '~/data/store/ducks/auth/actions'

export interface IRouteProps extends RouteProps {
  changeLanguage(newLanguage: string): void
  redirectPath?: string
}

export interface IPrivateRouteProps extends RouteProps {
  redirectPath?: string
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  const isAuth = useSelector((state: ApplicationState) => state.auth.valid)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthActions.validToken())
  }, [dispatch])

  return isAuth ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={{ pathname: props.redirectPath || '/' }} />
  )
}

const Routes: React.FC<IRouteProps> = ({ changeLanguage }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={(props: RouteProps) => <LoginView {...props} changeLanguage={changeLanguage} />}
      />
      <PrivateRoute
        path="/dashboard"
        component={(props: RouteProps) => <HomeView {...props} changeLanguage={changeLanguage} />}
      />
    </Switch>
  </BrowserRouter>
)

export default Routes
