const user = require('../models/username');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    if(req.url == "/login" || req.url == "/username"){
        return next();
    }

    let userId = req.session.userId;
    if(!userId || userId == null){
        return res.redirect("/");
    }

    let userFromDb = await user.findByPk(userId);
    if(userFromDb == null){
        return res.redirect("/");
    }

    req.identity.isAuthenticated = true;
    req.identity.user = {
        id: userFromDb.dataValues.id,
        firstName: userFromDb.dataValues.firstName,
        lastName: userFromDb.dataValues.lastName,
        email: userFromDb.dataValues.email,
        role: 'user'
    }
    next();
}