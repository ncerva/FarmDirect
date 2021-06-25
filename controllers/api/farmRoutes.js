const router = require('express').Router();
const Farm = require('../../models/Farm')


router.get('/', (req, res) => {
  Farm.find({})
  .then(dbFarm => {
    res.json(dbFarm);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;