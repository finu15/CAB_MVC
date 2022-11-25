const express = require('express');
const cc = require('../controllers/usernameController');

const router = express.Router();

router.get('/login', cc.login);
router.post('/login', cc.loginPost);
router.get('/username', cc.create);
router.post('/username', cc.createPost);

//router.post('/home', cc.home);

module.exports = router;