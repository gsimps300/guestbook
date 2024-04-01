const bcrypt = require('bcrypt');
const userModel = require('../models/userModel'); 
const jwt = require("jsonwebtoken");

let payload = { username: user.username }; let accessToken =
jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
res.cookie('jwt' , accessToken);

exports.verify = function (req, res, next) {
    let accessToken = req.cookies.jwt; 
    if(!accessToken) { 
        returnres.status(403).send();
     } 
     let payload; 
     try
    {
     payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    next();
    } 
    catch (e) {
     //if an error occurred return request unauthorized error
    res.status(401).send();
     }
    }; 