const httpStatus = require('http-status');
const { People } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a people
 * @param {Object} peopleBody
 * @returns {Promise<People>}
 */
const createPeople = async (peopleBody) => {
  return People.create(peopleBody);
};

/**
 * Query for peoples
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPeoples = async (filter, options) => {
  const peoples = await People.paginate(filter, options);
  return peoples;
};


module.exports = {
  createPeople,
  queryPeoples,
};
