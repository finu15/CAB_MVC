const user = require('../models/mycab');
const { body, validationResult } = require('express-validator');

module.exports.home = (req, res, next) => {
    res.render('home');
}

module.exports.cab = (req, res, next) => {
    res.render('mycab');
}

module.exports.cabPost = async (req, res, next) => {
    user.create({
        cabmodel: req.body.cabmodel,
        regnum: req.body.regnum,
        lnum: req.body.lnum,
        dlnum: req.body.dlnum,
        passenger_id: req.identity.user.passenger_id
    })

        .then(res.redirect('/cabDetails'));
}

module.exports.deleteCab = async (req, res, next) => {
    let cab_id = req.params.id;
    let confirmFromDb = await user.findByPk(cab_id);
    if (confirmFromDb != null) {
        await user.destroy({
            where: {
                cab_id: cab_id
            }
        });
        res.redirect("/cabDetails");
    }
}

module.exports.mycabs = (req, res, next) => {
    let passenger_id = req.session.userId;
    console.log("idd", passenger_id)
    user.findAll({
        where:
            { passenger_id: passenger_id }
    })

        .then(bookings => {
            res.render('cabDetails', {
                data: bookings
            });
        })
}