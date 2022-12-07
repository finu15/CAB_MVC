const user = require('../models/passengers');
const { body, validationResult } = require('express-validator');

module.exports.home = (req, res, next) => {
    res.render('home');
}

module.exports.getDriverHome = (req, res, next) => {
    res.render('driverhome');
}

module.exports.getAdminHome = (req, res, next) => {
    res.render('adminhome');
}


module.exports.login = (req, res, next) => {
    res.render('login');
}

module.exports.about = (req, res, next) => {
    res.render('about');
}

module.exports.contact = (req, res, next) => {
    res.render('contact');
}

module.exports.cabs = (req, res, next) => {
    res.render('ourcabs');
}

module.exports.ride = (req, res, next) => {
    res.render('bookingDetails');
}

module.exports.booking = (req, res, next) => {
    res.render('booking');
}

module.exports.register = (req, res, next) => {
    res.render('registration');
}

module.exports.loginPost = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password)
    const userFromDb = await user.findOne({
        where: { username: username, password: password }
    });
    console.log(userFromDb)
    if (userFromDb == null) {
        return res.render('registration', { message: 'Not Registered' })
    }

    req.session.userId = userFromDb.passenger_id;
    console.log(req.session.userId)
    if (userFromDb.role == 'driver') {
        return res.redirect('/driverhome');
    }
    else if(userFromDb.role=='user') {
        return res.redirect('/home');
    }
    else{
        return res.redirect('/adminhome');
    }
}

module.exports.registerPost = async (req, res, next) => {
    let existingUser = await user.findOne({
        where: {
            email: req.body.email,
        }
    });

    if (existingUser) {
        return res.render('login', { message: 'Already registered.' });
    }

    await user.create({
        role: req.body.role,
        title: req.body.title,
        fullName: req.body.fullName,
        username: req.body.username,
        dob: req.body.dob,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    });

    console.log(req.body);

    res.redirect('/login');
}

module.exports.logout = (req, res, next) => {
    req.session = null;
    res.redirect("/login");
}