import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  activated: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

function hashPassword (next) {
  if (!this.isModified('password')) {
    return next()
  }

  return bcrypt.hash(this.password, 12)
    .then((hash) => {
      this.password = hash
    })
    .catch(next)
}

function comparePassword (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.pre('save', hashPassword)
userSchema.methods.comparePassword = comparePassword

export default mongoose.model('User', userSchema)
