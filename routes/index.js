const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homepage');
console.log('router loaded');

router.get('/', homeController.home);

module.exports = router;
