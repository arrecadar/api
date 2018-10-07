import jwt from 'jsonwebtoken'
import { curry } from 'ramda'

const { APP_SECRET } = process.env

export const create = curry((time, payload) =>
  jwt.sign(payload, APP_SECRET, {
    expiresIn: time,
    algorithm: 'HS256',
  }))

export const verify = token =>
  jwt.verify(token, APP_SECRET, {
    algorithms: ['HS256'],
  })
