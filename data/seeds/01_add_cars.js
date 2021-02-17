exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car-dealer')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { VIN: 12345, make: 'BMW', model: 'X4', mileage: 10000 },
        { VIN: 54321, make: 'Ferrari', model: 'Italian', mileage: 20000 },
        { VIN: 56789, make: 'Tesla', model: 'Model S', mileage: 30000 },
        { VIN: 98765, make: 'Mercedes', model: 'cla250', mileage: 40000 },
        { VIN: 24680, make: 'Ford', model: 'Raptor', mileage: 50000 },
      ]);
    });
};
