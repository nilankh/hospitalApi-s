const express = require('express');

const router = express.Router();
const register = require('../controllers/patient_controller');
// const createReport = require('../controllers/patient_controller');


router.get('/register', register.registerPatient);
router.get('/create-report', register.createReport);
router.get('/all-report', register.allReports);

module.exports = router;
