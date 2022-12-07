const express = require('express');
const cc = require('../controllers/bookingController')

const router = express.Router()

router.get('/booking', cc.book);
router.post('/booking', cc.bookPost);
router.get('/delete/:booking_id', cc.delete);
router.get('/payment', cc.payment);
router.get('/update/:id', cc.update);
router.post('/update/:id', cc.updatePost);
router.get('/bookingDetails', cc.mybookings);
router.get('/final/:id', cc.invoice);

module.exports = router;