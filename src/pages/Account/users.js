import React from 'react'
import axios from 'axios'

import UserList from '../../components/UserList'
import getUserList from '../../support/axios'

class Users extends React.Component{
  state = {
    userList: []
  }

  componentDidMount() {
    axios.get('localhost:3000/users').then(res => {
      const userList = res.data
      this.setState({ userList })
    })
  }

  render() {
    return (
      <div>
        {/* <UserList userList= { this.state.userList }/> */}
      </div>
    )
  }
}

export default Users
