exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('age').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
        .createTable('todos', function(table) {
            table.increments();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.string('title').notNullable();
            table.boolean('completed').notNullable().defaultTo(false)
            table.integer('user_id').references('id').inTable('users')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('todos').dropTable('users');
};
