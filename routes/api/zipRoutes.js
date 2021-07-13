const router = require('express').Router();
const zipController = require('../../controllers/zipController');

router
  .route('/:zipcode/:radius')
  .get(zipController.findInRadius);

module.exports = router;
