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







// router.get('/', (req, res) => {
//   User.find({})
//   .then(dbUser => {
//     res.json(dbUser);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });

// router.post('/', ({ body }, res) => {
//   User.create(body)
//   .then(dbUser => {
//     res.json(dbUser);
//   })
//   .catch(err => {
//     res.status(400).json(err)
//   })
// });

module.exports = router;