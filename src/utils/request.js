import Axios from 'axios'

const request = Axios.create({
  baseURL: '/',
  timeout: 15000
})

export default request
