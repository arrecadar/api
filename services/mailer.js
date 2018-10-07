import nodemailer from 'nodemailer'

const {
  MAIL_HOST,
  MAIL_PASS,
  MAIL_PORT,
  MAIL_USER,
} = process.env

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
})

const createEmail = (recipient, subject, body) => ({
  from: 'no-reply@arrecadar.org',
  html: body,
  subject,
  to: recipient,
})

const activationEmail = ({ email, name, token }) =>
  createEmail(email, 'Bem-vindo ao Arrecadar!', `
    <h1>Olá ${name}</h1>
    <p>
      Para poder acessar sua conta, você precisa confirmar seu e-mail.\n
      Você pode fazer isso, <a href='http://localhost:3000/?query=mutation{activateUser(token:"${token}"){id name email active created_at updated_at}}'>acessando esse link</a>
    </p>
  `)

const emails = {
  active: user =>
    transporter.sendMail(activationEmail(user)).catch((error) => {
      throw new Error(error)
    }),
}

export default emails
