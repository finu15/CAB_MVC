const user = require('../models/passengers');
const { body, validationResult } = require('express-validator');

module.exports.home = (req, res, next) => {
    res.render('home');
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

module.exports.booking = (req, res, next) => {
    res.render('booking');
}

module.exports.register = (req, res, next) => {
    res.render('registration');
}

module.exports.getUsername = (req, res, next) => {
    res.render('username');
}

module.exports.registerPost = async (req, res, next) => {
    const {role, title, firstName, lastName, gender, dob, email, phoneNumber, address } = req.body;
    let existingUser = await user.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('login', { message: 'Already registered.' });
    }
    

    await user.create({
        role: role,
        title: title,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        dob: dob,
        email: email,
        phoneNumber: phoneNumber,
        address: address
    });

    res.redirect('username');
}