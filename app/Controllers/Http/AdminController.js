'use strict'

const Admin = use('App/Models/Admin')
const Hash = use('Hash')

class AdminController {
  async register({ request, response }) {
    const { nome, email, password } = request.all()

    const adminExists = await Admin.findBy('email', email)
    if (adminExists) {
      return response.status(400).send({ error: 'Email já registrado' })
    }

    const hashedPassword = await Hash.make(password)

    const admin = await Admin.create({
      nome,
      email,
      password: hashedPassword,
      hierarquia: 1
    })

    return response.status(201).send({
      message: 'Administrador registrado com sucesso',
      admin: { nome: admin.nome, email: admin.email }
    })
  }

  async authenticate({ request, auth, response }) {
    const { email, password } = request.all()

    try {
      const token = await auth.authenticator('adminJwt').attempt(email, password)
      return response.send({ token })
    } catch (error) {
      return response.status(401).send({ error: 'Email ou senha incorretos' })
    }
  }
}

module.exports = AdminController
