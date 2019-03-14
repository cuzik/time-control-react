import React from 'react'
import { Table } from 'reactstrap'

import UserListItem from './UserListItem'

const UserList = (userList) => (
  <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>username</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      { userList.map(userItem => <UserListItem userItem={userItem} key={userItem.id}/>)}
    </tbody>
  </Table>
)

export default UserList
