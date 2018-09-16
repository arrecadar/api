import mongoose from 'mongoose'

const {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} = process.env

const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

export const connect = () =>
  mongoose.connect(uri, {
    user: DB_USER,
    pass: DB_PASS,
    useNewUrlParser: true,
  })

export const { connection } = mongoose
