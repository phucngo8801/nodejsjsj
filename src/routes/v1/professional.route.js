const express = require('express');
const professionalController = require('../../controllers/professional.controller');

const router = express.Router();

router
  .route('/')
  .post(professionalController.createProfessional)
  .get(professionalController.getProfessionals);
module.exports = router;

