const router = require('express').Router();
const farmController = require('../../controllers/farmController'); 

router
  .route('/')
  .get(farmController.findAll)
  .post(farmController.create);


router
  .route('/:id')
  .get(farmController.findByOwner)
// router.get('/', (req, res) => {
//   Farm.find({})
//   .then(dbFarm => {
//     res.json(dbFarm);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });

module.exports = router;