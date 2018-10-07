import { applySpec, prop } from 'ramda'
import { create } from '../../services/token'

const createToken = ({ id }) => create('30min', { user: id })

export default applySpec({
  id: prop('id'),
  name: prop('name'),
  email: prop('email'),
  activated: prop('activated'),
  token: createToken,
  created_at: prop('created_at'),
  updated_at: prop('updated_at'),
})
