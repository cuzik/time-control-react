import React from 'react'

import UserList from './../../components/UserList'
import { getUserList } from './../../support/requests'

class Users extends React.Component{
  state = {
    userList: []
  }

  componentDidMount() {
    getUserList()
      .then(res => {
        const userList = res.data
        this.setState({ userList })
      })
  }

  render() {
    return (
      <div>

        <UserList userList={this.state.userList}/>
      </div>
    )
  }
}

export default Users
