const router = require('express').Router();
const Farmer = require('../../models/Farmer');

router.get('/', (req, res) => {
  Farmer.find({})
  .then(dbFarmer => {
    res.json(dbFarmer);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;