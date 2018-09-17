import { gql } from 'apollo-server'

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
