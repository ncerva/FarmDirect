const router = require('express').Router();
const farmerController = require('../../controllers/farmerController');
// const Farmer = require('../../models/Farmer');

router
  .route('/')
  .get(farmerController.findAll)
  .post(farmerController.create);


  router
  .route('/:email')
  .get(farmerController.findByEmail);
// router.get('/', (req, res) => {
//   Farmer.find({})
//   .then(dbFarmer => {
//     res.json(dbFarmer);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });
// router
//   .route('/:email')
//   .get(farmerController.findByEmail);


// router.post('/', ({ body }, res) => {
//   Farmer.create(body)
//   .then(dbFarmer => {
//     res.json(dbFarmer);
//   })
//   .catch(err => {
//     res.status(400).json(err)
//   })
// });

module.exports = router;