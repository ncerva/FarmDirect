const db = require('../models');
const { rawListeners } = require('../models/User');

module.exports = {
  findAll: function (req, res) {
    db.User.find({})
    .then(console.log(res))
    .then(dbUsers=> res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: async function ( req, res ) {
    await db.User.findOne({ email: req.params.email})
    .then(console.log('getting' + ' ' + req.params.email))
    // .then(console.log(res))
    .then(dbUser => {
      if (req.params.email === dbUser.email) {
        console.log('its a match')
        console.log(dbUser); 
        res.json(dbUser)
      } 
    })
    .catch(err => res.status(404).json(err));
  },
  // findByEmail: async function ( req, res ) {
  //   await db.User.findOne({ email: req.params.email})
  //   .then(console.log('getting' + ' ' + req.params.email))
  //   // .then(console.log(res))
  //   .then(dbUser => {
  //     console.log(dbUser); 
  //     res.json(dbUser)})
  //   .catch(err => res.status(404).json(err));
  // },
  create: function ( {body} , res) {
    db.User.create(body)
    .then(console.log(JSON.stringify(body)))
    .then(dbUser => res.json(dbUser))
    // .catch(err => console.log(err));
    .catch(err => res.status(422).json(err)); 
  }
  
  };