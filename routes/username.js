const express = require('express');
const cc = require('../controllers/usernameController');

const router = express.Router();

router.get('/login', cc.login);
router.post('/login', cc.loginPost);
router.get('/username', cc.username);
router.post('/username', cc.createPost);
router.get('/logout', cc.logout);

module.exports = router;