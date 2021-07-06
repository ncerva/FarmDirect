const router = require('express').Router();
const productController = require('../../controllers/productController');

router
  .route('/')
  .get(productController.getAll)
  .post(productController.create)

  router
    .route('/:id')
    .get(productController.getByFarmer)
    .delete(productController.deleteProduct)


module.exports = router;