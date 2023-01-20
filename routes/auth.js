
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const debug = require('debug')('app:startup');

const  {rdSettings} = require('../admin/filesettings');
var settings= rdSettings();


router.get('/settings', async (req, res) => {

   //returns the admin settings to user
   debug(settings);
    res.send(settings);
   
    
});
router.post('/',  async (req, res) => {
    const {error} = validate(req.body);
	console.log("trying to authorize");
   
    if (error) {
        // 400 bad request
		console.log("error occurred with validating user" + error);
        return res.status(400).send({message:error.details[0].message});
        
    }

    let user = await User.findOne({email: req.body.email});
	let zz = await User.find({email : req.body.email});
	console.log("found user  " + zz + " emal address: " + req.body.email + "  requested user " + user );
   
    if(!user) return res.status(400).send({message:'Invalid user or password'});

    if(user.status ==="Disabled") return res.status(400).send({message:'This Account has been Disabled... Please contact Support'});

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
        password: Joi.string().required() // password: Joi.string().min(settings.minpassword).max(settings.maxpassword).required()
    } 

    return Joi.validate(req, schema , {presence : "required"});
}

module.exports = router;
