const httpStatus = require('http-status');
const { Companies } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a companies
 * @param {Object} companiesBody
 * @returns {Promise<Companies>}
 */
const createCompanies = async (companiesBody) => {
  return Companies.create(companiesBody);
};

/**
 * Query for companiess
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCompaniess = async (filter, options) => {
  const companiess = await Companies.paginate(filter, options);
  return companiess;
};


module.exports = {
  createCompanies,
  queryCompaniess,
};
