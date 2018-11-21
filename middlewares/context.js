import authorization from './authorization'

export default async ({ ctx }) => {
  const user = await authorization(ctx.request.header.authorization)

  return {
    user,
  }
}
