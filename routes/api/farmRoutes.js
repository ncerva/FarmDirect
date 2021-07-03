const router = require('express').Router();
const farmController = require('../../controllers/farmController'); 

router
  .route('/')
  .get(farmController.findAll)
  .post(farmController.create);


router
  .route('/:id')
  .get(farmController.findByOwner)
  .put(farmController.Update)


module.exports = router;