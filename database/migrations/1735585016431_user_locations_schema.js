'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserLocationsSchema extends Schema {
  up () {
    this.create('user_locations', (table) => {
      table.increments(); 
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.float('latitude'); 
      table.float('longitude'); 
      table.timestamps(); 
    });
  }

  down () {
    this.drop('user_locations');
  }
}

module.exports = UserLocationsSchema;

