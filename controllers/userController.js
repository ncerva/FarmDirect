const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.User.find({})
    .then(dbUsers=> res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  create: function ( {body} , res) {
    db.User.create(body)
    .then(console.log(JSON.stringify(body)))
    .then(dbUser => res.json(dbUser))
    
    // .catch(err => res.status(400).json(err.response));
    .catch(err => {console.log(err)})
  }
  };