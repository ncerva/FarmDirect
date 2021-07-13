const router = require('express').Router();


const userRoutes = require('./userRoutes');
const farmRoutes = require('./farmRoutes');
const farmerRoutes = require('./farmerRoutes');
const productRoutes = require('./productRoutes');
const zipRoutes = require('./zipRoutes');

router.use('/users', userRoutes);
router.use('/farm', farmRoutes);
router.use('/farmer', farmerRoutes);
router.use('/product', productRoutes);
router.use('/zip', zipRoutes);

module.exports = router;