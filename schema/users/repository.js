import { tap } from 'ramda'
import User from './model'
import transform from './transform'
import { verify } from '../../services/token'
import emails from '../../services/mailer'

const handleErrorsOnSave = (error) => {
  if (error.code === 11000) {
    throw new Error('email already exists!')
  }

  throw new Error(error)
}

export const create = user =>
  new User(user).save()
    .then(transform)
    .then(tap(emails.active))
    .catch(handleErrorsOnSave)

export const activate = (token) => {
  const { user: id } = verify(token)
  return User.findByIdAndUpdate(id, { activated: true }, { new: true })
}
