const express = require ('express');
const cc = require('../controllers/passengerController')

const router = express.Router()

router.get('/', cc.home);
router.get('/home', cc.home);
router.get('/login', cc.login);
router.get('/about', cc.about);
router.get('/contact', cc.contact);
router.get('/ourcabs', cc.cabs);
router.get('/booking', cc.booking);
router.get('/registration', cc.register);
router.post('/registration', cc.registerPost);
router.post('/login', cc.loginPost);
router.get('/logout', cc.logout);
router.get('/driverhome', cc.getDriverHome);
router.post('/driverhome', cc.loginPost);

module.exports = router;