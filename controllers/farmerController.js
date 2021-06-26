const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Farmer.find({})
    .then(dbFarmers => res.json(dbFarmers))
    .catch(err => res.status(422).json(err))
  },
  create: function( {body} , res) {
    db.Farmer.create(body)
    .then(console.log(JSON.stringify(body)))
    .then(dbFarmer => res.json(dbFarmer))
    // .catch(err => console.log(err));
    .catch(err => res.status(422).json(err)); 
  }
};