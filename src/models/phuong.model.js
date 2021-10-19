const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const phuongSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
phuongSchema.plugin(toJSON);
phuongSchema.plugin(paginate);
/**
 * @typedef Phuong
 */
const Phuong = mongoose.model('Phuong', phuongSchema);

module.exports = Phuong;
