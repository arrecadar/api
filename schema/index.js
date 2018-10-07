import { Query, Resolvers } from './root'
import * as users from './users'

export const typeDefs = [
  Query,
  users.types,
]

export const resolvers = Object.assign(
  Resolvers,
  users.resolvers
)
