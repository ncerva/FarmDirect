const db = require('../models');
const { create } = require('../models/Farm');

module.exports = {
  findAll: function (req, res) {
    db.Farm.find({})
      .then(dbFarm => res.json(dbFarm))
      .catch(err => res.status(422).json(err))
  },
  create: function ( {body}, res) {
    db.Farm.create(body)
    .then(console.log(JSON.stringify(body)))
    .then(({_id}) => db.Farmer.findByIdAndUpdate(body.owner, {farms: _id}, {new: true}))
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(422).json(err));
  }
}