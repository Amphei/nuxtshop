import User from '~/server/models/userSchema'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const { name, email, password } = body as {
    name: string
    email: string
    password: string
  }

  if (!name || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required!',
    })
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists',
    })
  }

  const user = await User.create({ name, email, password })
  event.context.user = user

  if (user) {
    generateToken(event, user._id)
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid user data',
    })
  }
})