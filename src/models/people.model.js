const { address } = require('faker');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const peopleSchema = mongoose.Schema(
  {
    PID: {
      type: String,
      required: true,
      trim: true,
    },
    BOD: {
      type: Date,
      required: true,
      trim: true,
    },
    sex: {
      type: Boolean,
      required: true,
      trim: true,
    },
    Phone: {
      type: Number,
      required:true,
      trim: true,
    },
    Address:{
      type: String,
      required: true,
      trim: true,
    }

    
  },
  {
    timestamps: true,
  }
    
);
// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);


/**
 * @typedef People
 */
const People = mongoose.model('People', peopleSchema);

module.exports = People;
