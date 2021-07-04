const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
  /*Id automatically added to all mongoose schema's under '_id' with type objectId, returns 24 char hexidecimal string */
  farm_name: {
    type: String,
    // required: true, 
  },
  street_address: {
    type: String,
    trim: true,

  },
  city: {
    type: String,
    trim: true, 
  },
  state: {
    type: String,
    trim: true
  },
  zipcode: {
    type: String,
    trim: true,
  },
  description: {
    /* A small blurb describing the farm in a sentence or 2, this will appear on the carousel or on the search result card */
    type: String,
    // required: true,
  },
  bio: {
    /* A longer, paragragh or so description of the farm and its history. this will appear on the farms profile page */
    type: String,
    // required: true 
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Farmer'
  },
  logo: {
    /* this might not be used, link to farm logo */
    type: String,

  },
  image: {
    /* this might not be used, a profile/ background image for the farm */
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]


});

const Farm = mongoose.model('Farm', FarmSchema);

module.exports = Farm;