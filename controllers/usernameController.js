const user = require('../models/username');
const { body, validationResult } = require('express-validator');

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.username = (req, res, next)=>{
    res.render('username');
}

module.exports.create = (req, res, next)=>{
    res.render('login');
}

module.exports.createPost = async (req, res, next)=>{
    user.create({
        username: req.body.Username,
        password: req.body.password,
        cpassword: req.body.cpassword
    })
    .then(user => {
        res.redirect('/login');
    })
}

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.loginPost = async (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password)
    const userFromDb = await user.findOne({
        where: {
            username: username,
            password: password
        }
    });

    if(userFromDb==null){
        res.render('login', {message: 'Not registered.'});
    }

    res.render('login');

}