const express = require ('express');
const cc = require('../controllers/passengerController')

const router = express.Router()

router.get('/', cc.home);
router.get('/login', cc.login);
router.get('/about', cc.about);
router.get('/contact', cc.contact);
router.get('/booking', cc.booking);
router.get('/registration', cc.register);
router.post('/registration', cc.registerPost);
router.get('/username', cc.getUsername);

module.exports = router;