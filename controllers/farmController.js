const db = require('../models');
const { create } = require('../models/Farm');

module.exports = {
  findAll: function (req, res) {
    db.Farm.find({})
      .then(dbFarm => res.json(dbFarm))
      .catch(err => res.status(422).json(err))
  },
  findByOwner: async function (req, res){
    await db.Farm.findOne({ owner: req.params.id})
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(400).json(err))
  },
  Update: async function(req, res) {
    await db.Farm.findOneAndUpdate({owner: req.params.id}, req.body)
    // .then(console.log('sending' + JSON.stringify( req.body)))
    .then(dbFarm => res.json(dbFarm))
    // .then(console.log('updated' + res))
    .catch(err => res.status(422).json(err));
  },
  create: function ( {body}, res) {
    db.Farm.create(body)
    // .then(console.log(JSON.stringify(body)))
    
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(422).json(err));
  },
  createById: function (req, res) {
    db.Farm.create({
      farm_name: "",
      description: "",
      bio: "",
      owner: req.params.id
    })
    // .then(console.log(JSON.stringify(req.body)))
    // .then(({_id}) => db.Farmer.findByIdAndUpdate(body.owner, {farms: _id}, {new: true}))
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(422).json(err));
  },
  findAllByZip: function( req, res) {
    db.Farm.find({
      zipcode: req.params.zipcode
    })
    .then(dbFarm => {
      res.json(dbFarm)
      console.log('server ' + dbFarm)
    })
    .catch(err => res.status(422).json(err))
  },
  findById: function( req, res) {
    db.Farm.findById(req.params.id)
    .then(dbFarm => res.json(dbFarm))
    .catch(err => res.status(400).json(err))
  },
  bigChungus: function(req, res){
    let zipArr = req.params.zipcodes
    let resArr = []
    for(let i = 0; i < zipArr.length; i++) {
      db.Farm.find({zipcode: zipArr[i]})
      .then(dbFarm => resArr.push(dbFarm))
      .then(console.log(resArr))
    }
    
    
  }
  
}