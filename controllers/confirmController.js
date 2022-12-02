const Bookings = require('../models/booking');

module.exports.payment = (req, res, next) => {
    res.render('payment');
}

module.exports.getBooking = (req, res, next) => {
    Bookings.findAll().then(result => {
        res.render('bookingDetails', {
            data: result,

        });
    })
}

module.exports.delete = async (req, res, next) => {
    let booking_id = req.params.booking_id;
    let confirmFromDb = await Bookings.findByPk(booking_id);
    if (confirmFromDb != null) {
        await Bookings.destroy({
            where: {
                booking_id: booking_id
            }
        });
        res.redirect("/bookingDetails");
    }
}