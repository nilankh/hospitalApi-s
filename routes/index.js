const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homepage');
console.log('router loaded');

router.get('/', homeController.home);
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));


module.exports = router;
