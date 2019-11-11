
const express = require('express');
const mongoose = require('mongoose');


const newUserSchema = new mongoose.Schema({
    name : {type: String, required : true, minlength: 5, maxlength: 50},  
    email : {type: String, require: true, minlength: 5, maxlength: 50, unique: true},
    password : {type: String, required : true, minlength: 5, maxlength: 1024},
    createDate : {type : Date, default : Date.now},
    isadmin: {type: Boolean, default: "false"},
    newUserExpiry: {type : Date, default : Date.now() + 14400000}  // 36000000 is 1 hr
    

});

const NewUser = mongoose.model('newuser', newUserSchema);

exports.NewUser = NewUser;


   


