const express = require('express');
const peopleController = require('../../controllers/people.controller');

const router = express.Router();

router
  .route('/')
  .post(peopleController.createPeople)
  .get(peopleController.getPeoples);
module.exports = router;

