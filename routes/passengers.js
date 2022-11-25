const express = require ('express');
const cc = require('../controllers/passengerController')

const router = express.Router()

router.get('/', cc.home);
router.get('/registration', cc.register);
router.post('/registration', cc.registerPost);
router.get('/username', cc.getUsername);

module.exports = router;