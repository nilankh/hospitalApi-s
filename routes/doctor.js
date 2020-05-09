const express = require('express');

const router = express.Router();
const login = require('../controllers/doctors_controller')
// const signup = require('../controllers/doctors_controller');

router.get('/register', login.signUp);
router.get('/login', login.signIn);
module.exports = router;