'use strict'

const Schema = use('Schema')

class AdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments() 
      table.string('nome').notNullable() 
      table.string('email').notNullable().unique() 
      table.string('password').notNullable() 
      table.string('hierarquia').notNullable() 
      table.timestamps() 
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminSchema
