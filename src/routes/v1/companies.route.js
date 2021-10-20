const express = require('express');
const companiesController = require('../../controllers/companies.controller');

const router = express.Router();

router
  .route('/')
  .post(companiesController.createCompanies)
  .get(companiesController.getCompaniess);
module.exports = router;

