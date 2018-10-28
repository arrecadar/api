import { gql } from 'apollo-server-koa'
import {
  GraphQLDateTime,
  GraphQLEmail,
  GraphQLLimitedString,
  GraphQLPassword,
} from 'graphql-custom-types'

export const Query = gql`
  scalar Email
  scalar DateTime
  scalar Password
  scalar MinString

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export const Resolvers = {
  Email: GraphQLEmail,
  DateTime: GraphQLDateTime,
  Password: new GraphQLPassword(6, null, null, {
    alphaNumeric: true,
    specialChars: true,
  }),
  MinString: new GraphQLLimitedString(3),
  Mutation: {},
}
