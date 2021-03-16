exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('car_id');
    table.string('VIN');
    table.string('make');
    table.string('model');
    table.float('mileage');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
