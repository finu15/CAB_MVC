const express = require('express');
const cc = require('../controllers/driverController')

const router = express.Router()

router.get('/home', cc.home);
router.get('/mycab', cc.cab);
router.post('/mycab', cc.cabPost);
router.get('/deletecab/:id', cc.deleteCab);
router.get('/cabDetails', cc.mycabs);

module.exports = router;