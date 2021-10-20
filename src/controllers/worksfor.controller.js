const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { worksforService } = require('../services');

const createWorksfor = catchAsync(async (req, res) => {
  const worksfor = await worksforService.createWorksfor(req.body);
  res.status(httpStatus.CREATED).send(worksfor);
});

const getWorksfors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = 'professional'
  const result = await worksforService.queryWorksfors(filter, options);
  res.send(result);
});



module.exports = {
  createWorksfor,
  getWorksfors,
  
};
