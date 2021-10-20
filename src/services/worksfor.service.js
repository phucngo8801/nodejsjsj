const httpStatus = require('http-status');
const { Worksfor } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a worksfor
 * @param {Object} worksforBody
 * @returns {Promise<Worksfor>}
 */
const createWorksfor = async (worksforBody) => {
  return Worksfor.create(worksforBody);
};

/**
 * Query for worksfors
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWorksfors = async (filter, options) => {
  const worksfors = await Worksfor.paginate(filter, options);
  return worksfors;
};


module.exports = {
  createWorksfor,
  queryWorksfors,
};
