const db = require('../../data/config-db');

module.exports = {
  get,
  getById,
  insert,
};

function get() {
  return db('cars');
}

function getById(car_id) {
  return db('cars').where({ car_id }).first();
}

async function insert(car) {
  const [car_id] = await db('cars').insert(car, ['car_id']);
  return getById(car_id);
}
