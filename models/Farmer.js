const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmerSchema = new Schema({
  /*Id automatically added to all mongoose schema's under '_id' with type objectId, returns 24 char hexidecimal string */
  first_name: {
    type: String,
    trim: true,
    required: 'First name required'
  },
  last_name: {
    type: String,
    trim: true,
    required: 'Last name required'
  },
  email: {
    type: String,
    unique: true,
    required: 'Email required',
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
    validate: [({ length }) => length >= 6, 'Password should be longer than 6 characters ']
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
  farms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Farm'
    }
  ]



});

const Farmer = mongoose.model('Farmer', FarmerSchema);
module.exports = Farmer;