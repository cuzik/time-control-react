import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/Home'
import Account from '../pages/Account'

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
          <Link to={'/account'}>Account</Link>
          <Link to={''}>Home</Link>
          <Switch>
            <Route path='/account' component={ Account } />
            <Route path='' component={ Home } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Menu
