import { gql } from 'apollo-server-koa'

export const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export const Resolvers = {
  Mutation: {},
}
