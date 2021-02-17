exports.up = function (knex) {
  return knex.schema.createTable('car-dealer', (table) => {
    table.increments();
    table.integer('VIN').unique().notNullable();
    table.text('make').notNullable();
    table.text('model').notNullable();
    table.integer('mileage').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
