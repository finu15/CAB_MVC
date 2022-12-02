const user = require('../models/username');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    if(req.url == "/login" || req.url == "/registration" || req.url == "/username" ){
        return next();
    }

    let userId = req.session.id;
    if(!userId || userId == null){
        return res.redirect("/login");
    }

    let userFromDb = await user.findByPk(userId);
    if(userFromDb == null){
        return res.redirect("/registration");
    }

    req.identity.isAuthenticated = true;
    req.identity.user = {
        user_id: userFromDb.dataValues.user_id,
        username: userFromDb.dataValues.username,
        password: userFromDb.dataValues.password
    }
    next();
}