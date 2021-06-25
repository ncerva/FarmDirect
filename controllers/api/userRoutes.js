const router = require('express').Router();
const User = require('../../models/User');


router.get('/', (req, res) => {
  User.find({})
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;