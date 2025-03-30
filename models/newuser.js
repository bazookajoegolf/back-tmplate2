
const express = require('express');
const mongoose = require('mongoose');

const  {rdSettings} = require('../admin/filesettings');
var settings= rdSettings();


const newUserSchema = new mongoose.Schema({
    name : {type: String, required : true, minlength: settings.minname, maxlength: settings.maxname},  
    email : {type: String, require: true, minlength: 5, maxlength: 50, unique: true},
    password : {type: String, required : true, minlength: settings.minpassword, maxlength: 100},
    createDate : {type : Date, default : Date.now},
    isadmin: {type: Boolean, default: "false"},
    newUserExpiry: {type : Date, default : Date.now() + 36000000 * settings.newusertoken},  // 36,000,000 is 1 hr
    status: {type: String, required : true, default: "Enabled"},
    gender: {type: String, required : true, default: "Unknown"},
    roles : {type: Array},
    notes : {type: String},
    buddy : {type: Array,default:[]}
    

});

const NewUser = mongoose.model('newuser', newUserSchema);

exports.NewUser = NewUser;


   


