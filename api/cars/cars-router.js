const express = require('express');
const router = express.Router();

const Car = require('./cars-model');

router.get('/', (req, res) => {
  Car.get()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  Car.getById(req.params.id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post('/', (req, res) => {
  Car.insert(req.body)
    .then((newCar) => {
      res.status(201).json(newCar);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
module.exports = router;
