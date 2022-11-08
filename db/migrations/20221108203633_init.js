/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('words', (table) => {
      table.increments('word_id');
      table.string('word').notNullable().unique();
      table.timestamps(true, true, false);
    })
    .createTable('accounts', (table) => {

    })
    .createTable('sessions', (table) => {

    })
    .createTable('movements', (table) => {

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('words')
    .dropTable('accounts')
    .dropTable('sessions')
    .dropTable('movements');
};
