import { gql } from 'apollo-server-koa'

export default gql`
  extend type Mutation {
    createUser(
      name: MinString!
      email: Email!
      password: Password!
    ): User

    activateUser(token: String!): User
  }

  type User {
    name: String
    email: Email
    activated: Boolean
    token: String
    created_at: DateTime
    updated_at: DateTime
  }
`
