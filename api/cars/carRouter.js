const express = require('express');
const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('car-dealer')
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to store the cars' ${error.message}` });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('car-dealer')
    .where({ id })
    .first()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to retrieve the car' ${error.message}` });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('car-dealer')
    .insert(carData)
    .then((ids) => {
      return db('car-dealer').where({ id: ids[0] });
    })
    .then((newCar) => {
      res.status(201).json(newCar);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to store the car' ${error.message}` });
    });
});

module.exports = router;
