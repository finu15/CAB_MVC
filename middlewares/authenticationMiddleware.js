const user = require('../models/passengers');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    if(req.url == "/login" || req.url == "/registration"){
        return next();
    }

    let userId = req.session.userId;
    console.log("Id: ", userId)
    if(!userId || userId == null){
        return res.redirect("/login");
    }

    let userFromDb = await user.findByPk(userId);
    if(userFromDb == null){
        return res.redirect("/registration");
    }

    req.identity.isAuthenticated = true;
    req.identity.user = {
        passenger_id: userFromDb.dataValues.passenger_id,
        username: userFromDb.dataValues.username,
        password: userFromDb.dataValues.password
    }
    next();
}