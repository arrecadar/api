import Koa from 'koa'
import { ApolloServer, ApolloError } from 'apollo-server-koa'
import { typeDefs, resolvers } from '../schema'
import {
  context,
  onHealthCheck,
} from '../middlewares'

const app = new Koa()
const { PORT } = process.env

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.applyMiddleware({
  app,
  path: '/',
  onHealthCheck,
})

export default app.listen({ port: PORT }, () => {
  console.log(`🚀 application running at port ${PORT}`) // eslint-disable-line no-console
})
