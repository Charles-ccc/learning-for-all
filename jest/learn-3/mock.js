import axios from '../learn-4/node_modules/axios'

export const fetchData = () => {
  return axios.get('/').then(res => res.data)
}

export const getNumber = () => {
  return 12345
}