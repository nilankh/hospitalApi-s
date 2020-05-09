const express = require('express');

const router = express.Router();
const login = require('../controllers/doctors_controller')
router.get('/register')
router.get('/login')
module.exports = router;