import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import SignUp from './pages/session/signUp'
import SignIn from './pages/session/signIn'
import Users from './pages/account/users'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <PrivateRoute path='/users' component={Users} />
      <PrivateRoute path='/' component={() => <h1>App</h1>} />
      <Route path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
