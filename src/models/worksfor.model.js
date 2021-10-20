const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const{Schema} = mongoose;

const worksforSchema = mongoose.Schema(
  {
    professional: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref:'Professional'
    
    },
   
    Date_of_joinning: {
      type: Date,
      required: true,
      trim: true,
    },
    Salary: {
      type: Number,
      required: true,
      trim: true,
    
    },

  },
  {
    timestamps: true,
  }
    
);
// add plugin that converts mongoose to json
worksforSchema.plugin(toJSON);
worksforSchema.plugin(paginate);


/**
 * @typedef Worksfor
 */
const Worksfor = mongoose.model('Worksfor', worksforSchema);

module.exports = Worksfor;
