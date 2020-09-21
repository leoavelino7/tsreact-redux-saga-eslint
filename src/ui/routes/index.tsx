import React, { useEffect } from 'react'
import {Redirect, Route, RouteProps} from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as AuthActions from '../../data/store/ducks/auth/actions'
import { ApplicationState } from '../../data/store'

import { HomeView } from '../views/HomeView'
import { LoginView } from '../views/LoginView'

export interface IPrivateRouteProps extends RouteProps {
  isAuth: boolean
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
    <Redirect to={{pathname: props.redirectPath || '/'}} />
  )
}

const Routes = () => (
  <BrowserRouter>
      <Switch> 
          <Route exact path="/" component={LoginView} />
          <PrivateRoute path="/dashboard" component={HomeView} isAuth={true}/>
      </Switch>
  </BrowserRouter>
);

export default Routes