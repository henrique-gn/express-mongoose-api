import { connect } from 'mongoose'

export function connectDatabase() {
  const URL = process.env.MONGO_URL as string
  connect(URL)
    .then(() => console.log('Connected to database'))
    .catch(error => console.log('Error connecting to database', error))
}
