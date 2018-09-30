import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { typeDefs, resolvers } from '../schema'
import onHealthCheck from '../middlewares/healthCheck'

const app = new Koa()
const { PORT } = process.env

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({
  app,
  onHealthCheck,
})

export default app.listen({ port: PORT }, () => {
  console.log(`🚀 appication running at port ${PORT}`) // eslint-disable-line no-console
})
