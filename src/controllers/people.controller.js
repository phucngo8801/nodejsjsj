const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { peopleService } = require('../services');

const createPeople = catchAsync(async (req, res) => {
  const people = await peopleService.createPeople(req.body);
  res.status(httpStatus.CREATED).send(people);
});

const getPeoples = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await peopleService.queryPeoples(filter, options);
  res.send(result);
});



module.exports = {
  createPeople,
  getPeoples,
  
};
