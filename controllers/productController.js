const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Product.find({})
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(422).json(err))
  },
  create: function( {body}, res) {
    db.Product.create(body)
    // .then(console.log(JSON.stringify(body)))
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(422).json(err));
  },
  getByFarmer: function(req, res) {
    db.Product.find({
      farmerId: req.params.id
    })
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(404).json(err));
  }
}