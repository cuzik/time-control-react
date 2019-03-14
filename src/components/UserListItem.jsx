import React from 'react'

const UserListItem = userItem => (
  <tr key={userItem.id}>
    <td> { userItem.id } </td>
    <td> { userItem.name } </td>
    <td> { userItem.email } </td>
  </tr>
)

export default UserListItem
