import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Users from '../pages/Account/users'

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Link to={'/users'}>Users</Link>
          <Link to={''}>Home</Link>
          <Switch>
            <Route path='/users' component={ Users } />
            <Route path='' component={ Home } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Menu
