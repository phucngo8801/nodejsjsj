const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { companiesService } = require('../services');

const createCompanies = catchAsync(async (req, res) => {
  const companies = await companiesService.createCompanies(req.body);
  res.status(httpStatus.CREATED).send(companies);
});

const getCompaniess = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = 'worksfor'
  const result = await companiesService.queryCompaniess(filter, options);
  res.send(result);
});



module.exports = {
  createCompanies,
  getCompaniess,
  
};
