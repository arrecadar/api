import firebase from 'firebase-admin'
import { AuthenticationError } from 'apollo-server-koa'

const {
  FIREBASE_PROTECTED_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} = process.env

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: FIREBASE_PROTECTED_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
})

export default async (token) => {
  if (!token) {
    return {}
  }

  try {
    return await firebase.auth().verifyIdToken(token)
  } catch (e) {
    throw new AuthenticationError(e.message)
  }
}
