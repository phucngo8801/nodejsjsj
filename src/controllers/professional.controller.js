const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { professionalService } = require('../services');

const createProfessional = catchAsync(async (req, res) => {
  const professional = await professionalService.createProfessional(req.body);
  res.status(httpStatus.CREATED).send(professional);
});

const getProfessionals = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = 'people'
  const result = await professionalService.queryProfessionals(filter, options);
  res.send(result);
});



module.exports = {
  createProfessional,
  getProfessionals,
  
};
