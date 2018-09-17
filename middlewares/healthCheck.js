import { connection } from '../bootstrap/database'

const healthCheck = () =>
  new Promise((resolve, reject) => {
    if (connection.readyState !== 1) {
      reject(new Error('service unhealthy'))
    }

    resolve()
  })

export default healthCheck
