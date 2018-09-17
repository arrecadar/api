import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from '../schema'

const { PORT } = process.env

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = server.listen(PORT).then(({ url }) => {
  console.log(`🚀 appication running at ${url}`) // eslint-disable-line no-console
})

export default app
