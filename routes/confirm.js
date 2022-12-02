const express = require('express');
const cc = require('../controllers/confirmController')

const router = express.Router()

router.get('/bookingDetails', cc.getBooking);
router.get('/delete/:booking_id', cc.delete);
router.get('/payment', cc.payment);

module.exports = router;