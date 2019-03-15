import api from '../services/api'

const getUserList = () => (
  api.get('users')
)

export { getUserList }
