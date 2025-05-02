const express = require('express');
const router = express.Router();
const { bookHotel, bookCab } = require('../controllers/bookingController');

router.post('/hotel', bookHotel);
router.post('/cab', bookCab);

module.exports = router;
