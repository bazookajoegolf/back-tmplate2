
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/',  async (req, res) => {
    const {error} = validate(req.body);
   
    if (error) {
        // 400 bad request
        return res.status(400).send({message:error.details[0].message});
        
    }

    let user = await User.findOne({email: req.body.email});
   
    if(!user) return res.status(400).send({message:'Invalid user or password'});

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword ) return res.status(400).send({message:'Invalid user or password'});

   const token = user.generateAuthToken();
    user.lastLogin = Date.now();
	const saveLastLogin = await user.save();
	// console.log(saveLastLogin);
    res.status(200).send({"token":token});
   
    //res.send(_.pick(user, ['_id','name','email']));
});




function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(50).required()
    } 

    return Joi.validate(req, schema , {presence : "required"});
}

module.exports = router;
