const express = require('express');
const cc = require('../controllers/confirmController')

const router = express.Router()

router.get('/confirm', cc.index);

module.exports = router;