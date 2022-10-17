import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://codifyy.azurewebsites.net/api',
  // baseURL: 'http://localhost:3000/api',
})
