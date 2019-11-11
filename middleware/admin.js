
const jwt = require('jsonwebtoken');
const config = require('config')



module.exports = function (req,res,next) {

    if(!req.user.isadmin) return res.status(403).send('forbidden');
    next();
}