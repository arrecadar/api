import * as user from './repository'

const resolver = {
  Mutation: {
    /**
     * Args is the user object and contains the following shape:
     * {
     *   name,
     *   email,
     *   password,
     * }
     */
    createUser: (parent, args) => user.create(args),
    /**
     * token is a jsonwebtoken created when user complete the register.
     * this expires in 30min.
     *
     * @TODO: add a method to re-create a token if it's necessary.
     */
    activateUser: (parent, { token }) => user.activate(token),
  },
}

export default resolver
