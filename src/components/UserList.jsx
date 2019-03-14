import React from 'react'

import UserListItem from './UserListItem'

const UserList = ({userList}) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>username</th>
        <th>email</th>
        <th>permission</th>
      </tr>
    </thead>
    <tbody>
      { userList.map(userItem => <UserListItem userItem={userItem} key={userItem.id}/>)}
    </tbody>
  </table>
)

export default UserList
