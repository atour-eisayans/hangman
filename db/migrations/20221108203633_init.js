/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('words', (table) => {
      table.increments('word_id' , { primaryKey: true });
      table.string('word', 50).notNullable().unique();
      table.timestamps(true, true, false);
    })
    .createTable('accounts', (table) => {
      table.increments('account_id', { primaryKey: true });
      table.string('username').notNullable().unique();
      table.string('email');
      table.string('password').notNullable();
      table.smallint('status').notNullable().defaultTo(1);
      table.timestamps(true, true, false);
    })
    .createTable('sessions', (table) => {
      table.increments('session_id', { primaryKey: true });
      table.integer('account_id').notNullable();
      table.integer('word_id').notNullable();
      table.smallint('status').notNullable().defaultTo(1);
      table.json('correct_guesses').notNullable().defaultTo(JSON.stringify([]));
      table.json('wrong_guesses').notNullable().defaultTo(JSON.stringify([]));
      table.smallint('remained_guesses').notNullable();

      table
        .foreign('account_id')
        .references('account_id')
        .inTable('accounts')
        .withKeyName('fk_sessions_account_id');

      table
        .foreign('word_id')
        .references('word_id')
        .inTable('words')
        .withKeyName('fk_sessions_word_id');
    })
    .createTable('movements', (table) => {
      table.bigIncrements('movement_id', { primaryKey: true });
      table.integer('session_id').notNullable();
      table.string('answer', 1).notNullable();
      table.timestamps(true, true, false);

      table
        .foreign('session_id')
        .references('session_id')
        .inTable('sessions')
        .withKeyName('fk_movements_session_id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('words')
    .dropTableIfExists('accounts')
    .dropTableIfExists('sessions')
    .dropTableIfExists('movements');
};
