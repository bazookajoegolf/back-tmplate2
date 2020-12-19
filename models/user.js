
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const config = require('config');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const  {rdSettings} = require('../admin/filesettings');


var privateKey = fs.readFileSync('./config/private.key','utf8');


var i = "bazookajoegolf Inc";    // Issuer
var s = "bazookajoegolf@outlook.com";  //Subject
var a = "http://handicap.bazookajoegolf.com"  //audience

var settings= rdSettings();
var e = settings.usertoken +'h';

var signOptions = {
   issuer : i,
   subject : s,
   audience : a,
   expiresIn: e,  
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
    name : {type: String, required : true, minlength: settings.minname, maxlength: settings.maxname},  
    email : {type: String, require: true, minlength: 5, maxlength: 50, unique: true},
    password : {type: String, required : true, minlength: settings.minpassword, maxlength: 1024},  // password is an encrypted length and not controlled by settings.  Settings will strictly work on front end.
    createDate : {type : Date, default : Date.now},
    lastLogin : {type: Date, default : Date.now},
    isadmin: {type: Boolean, default: "false"},
    status: {type: String, required : true, default: "Enabled"},
    gender: {type: String, required : true, default: "Unknown"},
    roles : {type: Array},
    notes : {type: String}

});

userSchema.methods.generateAuthToken = function(){
  // return jwt.sign({_id: this._id, email: this.email, isadmin: this.isadmin}, config.get('jwtPrivateKey'));
  
   return jwt.sign({_id: this._id,name:this.name, email: this.email, isadmin: this.isadmin, status: this.status, gender: this.gender},privateKey, signOptions);

}

const User = mongoose.model('user', userSchema);


function validateUser(user) {
    const schema = {
        //_id: Joi.string(),
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(100).required(),
        isadmin : Joi.any().allow(["false" , "true"]),
        status : Joi.string().required(),
        gender : Joi.string().required(),
        roles  : Joi.array(),
        notes  : Joi.string().max(2000)   
    } 

    return Joi.validate(user,schema , {presence : "required"});
}

function validateUpdate(user) {
    const schema = {
        name: Joi.string().min(settings.minname).max(settings.maxname).required(),
        email: Joi.string().min(5).max(50).required().email(),
        gender : Joi.string().required(),
	oldpassword : Joi.string(),
	password : Joi.string()
    } 

    return Joi.validate(user,schema , {presence : "required"});
}

function adminValidateUpdate(user) {
    const schema = {
        name: Joi.string().min(settings.minname).max(settings.maxname).required(),
        email: Joi.string().min(5).max(50).required().email(),
        isadmin : Joi.any().allow(["false" , "true"]),
       // password: Joi.string().min(settings.minpassword).max(settings.maxpassword).required(),
        status : Joi.string().required(),
	gender : Joi.string().required(),
        roles  : Joi.array(),
        notes  : Joi.string().min(0).max(settings.maxnotes)   
    } 

    return Joi.validate(user,schema );

}


exports.User = User;
exports.validate = validateUser;
exports.validateUpdate = validateUpdate;
exports.adminValidateUpdate = adminValidateUpdate;
