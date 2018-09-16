/**
 * Arrecadar API
 * bootstrap entrypoint.
 */
import 'dotenv/config'
import { ApolloServer, gql } from 'apollo-server'
import { connect as Database } from './bootstrap/database'

/**
 * Start dabatase connection
 */
Database()

const { PORT } = process.env

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`

const resolvers = {
  Query: {
    helloWorld: () => 'Hello World',
  },
}

const app = new ApolloServer({
  typeDefs,
  resolvers,
})

app.listen(PORT).then(({ url }) => {
  console.log(`🚀 appication running at ${url}`) // eslint-disable-line no-console
})
