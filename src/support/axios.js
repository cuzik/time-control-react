import axios from 'axios'

const getUserList = (a) => (
  axios.get('http://172.23.0.1:3000/api/v1/users')
)

export default {
  getUserList
}
