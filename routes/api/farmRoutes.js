const router = require('express').Router();
const { get } = require('mongoose');
const farmController = require('../../controllers/farmController'); 

router
  .route('/')
  .get(farmController.findAll)
  .post(farmController.create);


router
  .route('/:id')
  .get(farmController.findByOwner)
  .post(farmController.createById)
  .put(farmController.Update)

router
  .route('/zip/:zipcode')
  .get(farmController.findAllByZip)

router
  .route('/profile/:id')
  .get(farmController.findById)

router
  .route('/bigchungus')
  .get(farmController.bigChungus)

module.exports = router;