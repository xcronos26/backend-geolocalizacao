'use strict'

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer((handler) => {
    // Use variáveis de ambiente ou valores padrão
    const HOST = process.env.HOST || '0.0.0.0'
    const PORT = process.env.PORT || 10000
    return handler.listen(PORT, HOST) // Define porta e host explicitamente
  })
  .catch(console.error)
