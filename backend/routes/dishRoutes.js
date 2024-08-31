const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

router.get('/dishes', dishController.getDishes);

module.exports = router;
