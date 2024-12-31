'use strict'

const Hash = use('Hash')
const Model = use('Model')

class Admin extends Model {
  static boot () {
    super.boot()

    // Criptografar a senha antes de salvar
    this.addHook('beforeSave', async (adminInstance) => {
      if (adminInstance.dirty.password) {
        adminInstance.password = await Hash.make(adminInstance.password)
      }
    })
  }

  /**
   * Caso deseje implementar um sistema de tokens para admins,
   * aqui você pode criar a relação de tokens, como no modelo User.
   * 
   * @method tokens
   *
   * @return {Object}
   */
  // tokens() {
  //   return this.hasMany('App/Models/Token');
  // }
}

module.exports = Admin
