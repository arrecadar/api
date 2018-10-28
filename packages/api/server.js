/**
 * Arrecadar API
 * bootstrap entrypoint.
 */
import 'dotenv/config'
import {
  App as bootstrapApp,
  connect as bootstrapDatabase,
} from './bootstrap'

Promise
  .resolve(bootstrapDatabase)
  .then(bootstrapApp)
