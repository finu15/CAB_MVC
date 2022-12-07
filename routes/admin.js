const express = require('express');
const cc = require('../controllers/adminController')

const router = express.Router()

router.get('/adminbooking', cc.indexBook);
router.get('/createbook', cc.createBook);
router.post('/createbook', cc.createPostBook);

router.get('/admincabs', cc.indexCab);
router.get('/createcab', cc.createCab);
router.post('/createcab', cc.createPostCab);

router.get('/adminroutes', cc.indexRoute);
router.get('/createroute', cc.createRoute);
router.post('/createroute', cc.createPostRoute);
router.get('/updateroute/:id', cc.updateRoute);
router.post('/updateroute/:id', cc.updatePostRoute);
router.get('/deleteroute/:id', cc.deleteRoute);

module.exports = router;