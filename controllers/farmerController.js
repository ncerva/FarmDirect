const db = require('../models');
const { populate } = require('../models/Farm');

module.exports = {
  findAll: function (req, res) {
    db.Farmer.find({})
    .then(dbFarmers => res.json(dbFarmers))
    .catch(err => res.status(422).json(err))
  },
  findByEmail: async function ( req, res ) {
    await db.Farmer.findOne({ email: req.params.email})
    // .populate("farms")
    .then(console.log('getting' + ' ' + req.params.email))
    // .then(console.log(res))
    .then(dbFarmer => {
      if (req.params.email === dbFarmer.email) {
        console.log('its a match')
        console.log(dbFarmer); 
        res.json(dbFarmer)
      } 
    })
    .catch(err => res.status(404).json(err));
  },
  create: function( {body} , res) {
    db.Farmer.create(body)
    .then(console.log(JSON.stringify(body)))
    .then(dbFarmer => {
      res.json(dbFarmer)
      console.log(dbFarmer)
    })
    .catch(err => res.status(422).json(err)); 
  }
  
};