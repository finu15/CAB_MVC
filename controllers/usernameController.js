const user = require('../models/username');
const { body, validationResult } = require('express-validator');

module.exports.username = (req, res, next)=>{
    res.render('username');
}


module.exports.createPost = async (req, res, next)=>{
    user.create({
        username: req.body.username,
        password: req.body.password,
        cpassword: req.body.cpassword
    })
    .then(user => {
        res.redirect('/booking');
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
        return res.render('registration', {message: 'Not registered.'});
    }
    req.session.id = userFromDb.dataValues.user_id;
    res.render('home');
}

module.exports.logout = (req,res,next)=>{
    req.session = null;
    res.redirect("/login");
}