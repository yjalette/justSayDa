exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('login').notNullable().unique();
            table.string('name');
            table.boolean('active').defaultTo(false);
            table.string('password');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
