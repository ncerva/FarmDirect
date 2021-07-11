const router = require('express').Router();
const productController = require('../../controllers/productController');

router
  .route('/')
  .get(productController.getAll)
  .post(productController.create)

  router
    .route('/:id')
    .get(productController.getByFarmer)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

  router
    .route('/profile/:id')
    .get(productController.getByFarmer)
  



module.exports = router;