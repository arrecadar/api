import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`

export const resolvers = {
  Query: {
    helloWorld: () => 'Hello World',
  },
}
