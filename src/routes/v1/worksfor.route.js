const express = require('express');
const worksforController = require('../../controllers/worksfor.controller');

const router = express.Router();

router
  .route('/')
  .post(worksforController.createWorksfor)
  .get(worksforController.getWorksfors);
module.exports = router;

