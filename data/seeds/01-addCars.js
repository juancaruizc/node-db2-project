exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'a345345sf', make: 'BMW', model: 'x4', mileage: 30000 },
        { VIN: 'a345345sf', make: 'BMW', model: 'x4', mileage: 30000 },
        { VIN: 'a345345sf', make: 'BMW', model: 'x4', mileage: 30000 },
      ]);
    });
};
