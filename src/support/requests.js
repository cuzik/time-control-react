import API from './api';

const getUserList = () => (
  API.get('users')
)

export { getUserList }
