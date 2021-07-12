const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Product.find({})
    .then(dbProduct => res.json(dbProduct))
    .catch(err => res.status(422).json(err))
  },
  create: function( {body}, res) {
    db.Product.create(body)
    // .then(console.log(JSON.stringify(body)))
    .then(dbProduct => res.json(dbProduct))
    .catch(err => res.status(422).json(err));
  },
  getByFarmer: function(req, res) {
    db.Product.find({
      farmerId: req.params.id
    })
    .then(dbProduct => {
      res.json(dbProduct)
      console.log(dbProduct)
    })
    .catch(err => res.status(404).json(err));
  }, 
  updateProduct: function(req, res) {
    db.Product.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(dbProduct => res.json(dbProduct))
    .catch(err => res.status(422).json(err))
  },
  deleteProduct: function(req, res) {
    db.Product.deleteOne({
      _id: req.params.id
    })
    .then(dbProduct => {
      res.json(dbProduct)
      console.log(dbProduct)
    })
    .catch(err => res.status(422).json(err));
  }
}