const user = require('../models/booking');
const cab = require('../models/mycab');
const amount = require('../models/amount');

module.exports.getAdminBooking = (req, res, next) => {
    res.render('adminbooking');
}

/**Booking Controller */
module.exports.indexBook = (req, res, next) => {
    user.findAll().then(user => {
        console.log(user)
        res.render('adminbooking', {
            data: user,

        });
    })
}

module.exports.createBook = (req, res, next) => {
    res.render('adminbooking');
}

module.exports.createPostBook = (req, res, next) => {
    user.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time,
        passenger_id: req.identity.user.passenger_id
    })
        .then(userFromDb => {
            res.redirect("/adminbooking");
        })
}

/**Cab Controller */
module.exports.indexCab = (req, res, next) => {
    cab.findAll().then(cab => {
        console.log(cab)
        res.render('admincabs', {
            data: cab,

        });
    })
}

module.exports.createCab = (req, res, next) => {
    res.render('admincabs');
}

module.exports.createPostCab = (req, res, next) => {
    cab.create({
        cabmodel: req.body.cabmodel,
        regnum: req.body.regnum,
        lnum: req.body.lnum,
        dlnum: req.body.dlnum,
        passenger_id: req.identity.user.passenger_id
    })
        .then(cabFromDb => {
            res.redirect("/admincabs");
        })
}

/**Route Controller */
module.exports.indexRoute = (req, res, next) => {
    amount.findAll().then(amount => {
        res.render('adminroutes', {
            data: amount
        });
    })
}

module.exports.createRoute = (req, res, next) => {
    res.render('adminroutes');
}

module.exports.createPostRoute = (req, res, next) => {
    amount.createRoute({
        pickup: req.body.pickup,
        destination: req.body.destination,
        amount: req.body.amount
    })
        .then(amountFromDb => {
            res.redirect("/adminroutes");
        })
}

module.exports.updateRoute = async (req, res, next) => {
    amount.findByPk(req.params.id)
        .then(amountFromDb => {
            res.render('adminroute-update', {
                data: amountFromDb
            });
        });
}

module.exports.updatePostRoute = async (req, res, next) => {
    await amount.update(
        {
            pickup: req.body.pickup,
            destination: req.body.destination,
            amount: req.body.amount
        },
        {
            where: { amount_id: req.params.id }
        }
    )
    res.redirect('/adminroutes');
}

module.exports.deleteRoute = async (req, res, next) => {
    let amount_id = req.params.id;
    let amountFromDb = await amount.findByPk(amount_id);
    if (amountFromDb != null) {
        await amount.destroy({
            where: {
                amount_id: amount_id
            }
        });
        res.redirect("/adminroutes");
    }
}

module.exports.logoutAdmin = (req, res, next) => {
    req.session = null;
    res.redirect("/login");
}