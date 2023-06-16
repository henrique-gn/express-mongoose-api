import axios from 'axios'

const URL = process.env.APP_URL

export const Api = axios.create({
  baseURL: 'http://localhost:3000/api' ?? URL,
})
