import axios from 'axios'

export const apigit = axios.create({
  baseURL: 'https://api.github.com',
})
