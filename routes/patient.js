const express = require('express');

const router = express.Router();


// router.get('/', homeController.home);
router.get('/', (req, res)=> res.render('welcome'));

module.exports = router;
