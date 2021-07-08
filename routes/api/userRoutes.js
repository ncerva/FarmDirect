const router = require('express').Router();
const userController = require('../../controllers/userController');

// const User = require('../../models/User');

router 
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

router
  .route('/:email')
  .get(userController.findByEmail);

module.exports = router;