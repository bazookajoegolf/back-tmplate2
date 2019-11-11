
const express = require('express');
//const Joi = require('joi');
const mongoose = require('mongoose');

//const config = require('config');
//const jwt = require('jsonwebtoken');

const resetSchema = new mongoose.Schema({

    // mongoose validators
    // minlength, maxlength, match (a regex)
    //  to get a specific value:
    // category : { type: String, required : true, enum: ['web', 'internet', 'popular']}
    // for numbers:  min: 5, max : 200   ----lecture 103
    // custom validators... look at tag validation ---- lecture 104
    // async validators ...  look at async tag   -----lecture 105
    


    // other schema options for strings:  lowercase, uppercase, trim (removes padding)  --- lecture 107
    // custom getters and setters   get : v => Math.round(v)     set: v=> Math.round(v)
    email : {type: String, require: true},
    resetPasswordToken: {type: String, require: true},
    resetPasswordExpire : {type : Date, default : Date.now() + 3600000}  // 36000000 is 1 hr
    

});

const Reset = mongoose.model('reset', resetSchema);

exports.Reset = Reset;