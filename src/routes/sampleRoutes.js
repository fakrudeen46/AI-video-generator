const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/sample', sampleController.getSampleData);

module.exports = router;
