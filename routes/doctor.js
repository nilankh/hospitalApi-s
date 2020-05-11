const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctors_controller')
// const signup = require('../controllers/doctors_controller');

router.get('/register', doctorsController.signUp);
router.get('/login', doctorsController.signIn);

//register handle
router.post('/register', doctorsController.register);

//sign in Handle
router.post('/login', doctorsController.doctorlogin);
module.exports = router;