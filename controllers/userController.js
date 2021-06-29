const db = require('../models');

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
      console.log(dbUser); 
      res.json(dbUser)})
    .catch(err => res.status(404).json(err));
  },

  // findByEmail: function ( req, res) {
  //   db.User.find({})
  //   .then(dbUser => res.json(dbUser))
  //   .catch(err => res.status(404).json(err));
  // },

  // findByEmail: async function( req, res) {
  //   await db.User.findOne({email: req.params.email}, function (err, myUser) {
  //     if (!err) return res.status(200).json(myUser); // That's very very weird,that's work but RARELY that's doesn't work
  //     else console.log(err.message);
  //   })
  //   // .then(console.log('getting' + ' ' + req.params.email))
  //   // .then(console.log(res.body))
  //   // .then(dbUser => res.json(dbUser))
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