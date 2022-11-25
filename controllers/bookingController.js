const user = require('../models/booking');
const { body, validationResult } = require('express-validator');

module.exports.book = (req, res, next)=>{
    res.render('booking');
}

module.exports.confirm = (req, res, next)=>{
    res.render('confirm');
}

module.exports.bookPost = async (req, res, next)=>{
    user.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time
    })
    .then(user => {
        res.redirect('/confirm');
    })
}
