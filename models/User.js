const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
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
    validate: [({ length }) => length >= 6, 'Password ']
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
  }

});

UserSchema.pre('save',function(next){
  if(!this.isModified('password'))
      return next();
  bcrypt.hash(this.password,10,(err,passwordHash)=>{
      if(err)
          return next(err);
      this.password = passwordHash;
      next();
  });
});

UserSchema.methods.comparePassword = function(password,cb){
  bcrypt.compare(password, this.password, (err,isMatch)=>{
      if(err)
          return cb(err);
      else{
          if(!isMatch)
              return cb(null,isMatch);
          return cb(null, this);
      }
  });
}


const User = mongoose.model('User', UserSchema);
module.exports = User;