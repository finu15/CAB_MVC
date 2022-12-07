const user = require('../models/booking');
const db = require('../models/amount');
const { body, validationResult } = require('express-validator');

module.exports.book = (req, res, next) => {
    res.render('booking');
}

module.exports.payment = (req, res, next) => {
    res.render('payment');
}

module.exports.bookPost = async (req, res, next) => {
    user.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time,
        passenger_id: req.identity.user.passenger_id
    })

        .then(user => {
            const pickup = req.body.pickup;
            const destination = req.body.destination;
            console.log(pickup)
            db.findOne({
                where: { pickup: pickup, destination: destination }
            })
                .then(amount => {
                    console.log(amount.amount)
                    res.render("payment", {
                        amount: amount.amount,
                        amount_id: amount.amount_id,
                        pickup: amount.pickup,
                        destination: amount.destination
                    })
                })
        });
}

module.exports.mybookings = (req, res, next) => {
    let passenger_id = req.session.userId;
    console.log("idd", passenger_id)
    user.findAll({
        where:
            { passenger_id: passenger_id }
    })

        .then(bookings => {
            res.render('bookingDetails', {
                data: bookings
            });
        })
}

module.exports.delete = async (req, res, next) => {
    let booking_id = req.params.booking_id;
    let confirmFromDb = await user.findByPk(booking_id);
    if (confirmFromDb != null) {
        await user.destroy({
            where: {
                booking_id: booking_id
            }
        });
        res.render("bookingDetails");
    }
}

module.exports.update = async (req, res, next) => {
    user.findByPk(req.params.id)
        .then(confirmFromDb => {
            res.render('BookingUpdate', {
                data: confirmFromDb
            });
        });
}

module.exports.updatePost = async (req, res, next) => {
    await user.update(
        {
            pickup: req.body.pickup,
            destination: req.body.destination,
            date: req.body.date,
            time: req.body.time
        },
        {
            where: { booking_id: req.params.id }
        }
    )
    res.redirect('/bookingDetails');
}

module.exports.invoice = (req, res, next) => {
    let id = req.params.id;
    db.findByPk(id)
        .then(amount => {
            console.log("..........", amount)
            res.render('final', {

                amount_id: amount.amount_id,
                pickup: amount.pickup,
                destination: amount.destination,
                user: req.identity.user,
                amount: amount.amount
            })
        });
}
