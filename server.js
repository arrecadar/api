/**
 * Arrecadar API
 * bootstrap entrypoint.
 */
import 'dotenv/config'
import {
  App,
  connect as Database,
} from './bootstrap'

Promise
  .resolve(Database)
  .then(App)
