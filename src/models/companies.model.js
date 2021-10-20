const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const{Schema} = mongoose;

const companiesSchema = mongoose.Schema(
  {
    worksfor: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref:'Worksfor'
    
    },
   
    CID: {
      type: String,
      required: true,
      trim: true,
    },
    CName: {
      type: String,
      required: true,
      trim: true,
    
    },
    Address: {
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
companiesSchema.plugin(toJSON);
companiesSchema.plugin(paginate);


/**
 * @typedef Companies
 */
const Companies = mongoose.model('Companies', companiesSchema);

module.exports = Companies;
