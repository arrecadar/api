import test from 'ava'
import fetch from 'node-fetch'

const expected = {
  status: 'pass',
}

test('should service be healthy', async (t) => {
  const response = await fetch('http://api:4004/.well-known/apollo/server-health')
  const status = await response.json()

  t.deepEqual(status, expected)
})
