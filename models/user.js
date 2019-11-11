
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const config = require('config');
const jwt = require('jsonwebtoken');
const fs = require('fs');

var privateKey = fs.readFileSync('./config/private.key','utf8');


var i = "bazookajoegolf Inc";    // Issuer
var s = "bazookajoegolf@outlook.com";  //Subject
var a = "http://handicap.bazookajoegolf.com"  //audience

var signOptions = {
   issuer : i,
   subject : s,
   audience : a,
   expiresIn: '4h',  
   algorithm: "RS256"
};

const userSchema = new mongoose.Schema({

    // mongoose validators
    // minlength, maxlength, match (a regex)
    //  to get a specific value:
    // category : { type: String, required : true, enum: ['web', 'internet', 'popular']}
    // for numbers:  min: 5, max : 200   ----lecture 103
    // custom validators... look at tag validation ---- lecture 104
    // async validators ...  look at async tag   -----lecture 105
    


    // other schema options for strings:  lowercase, uppercase, trim (removes padding)  --- lecture 107
    // custom getters and setters   get : v => Math.round(v)     set: v=> Math.round(v)
    name : {type: String, required : true, minlength: 5, maxlength: 50},  
    email : {type: String, require: true, minlength: 5, maxlength: 50, unique: true},
    password : {type: String, required : true, minlength: 5, maxlength: 1024},
    createDate : {type : Date, default : Date.now},
	lastLogin : {type: Date, default : Date.now},
    isadmin: {type: Boolean, default: "false"}

});

userSchema.methods.generateAuthToken = function(){
  // return jwt.sign({_id: this._id, email: this.email, isadmin: this.isadmin}, config.get('jwtPrivateKey'));
   return jwt.sign({_id: this._id,name:this.name, email: this.email, isadmin: this.isadmin},privateKey, signOptions);

}

const User = mongoose.model('user', userSchema);


function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(100).required(),
       isadmin : Joi.any().allow(["false" , "true"])    
    } 

    return Joi.validate(user,schema , {presence : "required"});
}

function validateUpdate(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
	oldpassword : Joi.string(),
	password : Joi.string()
    } 

    return Joi.validate(user,schema , {presence : "required"});
}



exports.User = User;
exports.validate = validateUser;
exports.validateUpdate = validateUpdate;
