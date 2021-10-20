const httpStatus = require('http-status');
const { Professional } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a professional
 * @param {Object} professionalBody
 * @returns {Promise<Professional>}
 */
const createProfessional = async (professionalBody) => {
  return Professional.create(professionalBody);
};

/**
 * Query for professionals
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProfessionals = async (filter, options) => {
  const professionals = await Professional.paginate(filter, options);
  return professionals;
};


module.exports = {
  createProfessional,
  queryProfessionals,
};
