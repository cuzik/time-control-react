import api from '../services/api'

const getUserList = () => (
  api.get('api/v1/users')
)

export { getUserList }
