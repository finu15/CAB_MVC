const express = require('express');
const cc = require('../controllers/bookingController')

const router = express.Router()

router.get('/booking', cc.book);
router.post('/booking', cc.bookPost);
router.get('/confirm', cc.confirm);

module.exports = router;