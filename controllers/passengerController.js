const user = require('../models/passengers');
const { body, validationResult } = require('express-validator');

module.exports.home = (req, res, next) => {
    res.render('home');
}

module.exports.register = (req, res, next) => {
    res.render('registration');
}

module.exports.getUsername = (req, res, next) => {
    res.render('username');
}

module.exports.registerPost = async (req, res, next) => {
    const { title, firstName, lastName, gender, dob, email, phoneNumber, address } = req.body;
    let existingUser = await user.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('login', { message: 'Already registered.' });
    }
    

    await user.create({
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