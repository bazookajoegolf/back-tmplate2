const express = require('express');
const mongoose = require('mongoose');



const adminSettingsSchema = new mongoose.Schema({
    minpassword: {type: Number, required : true, default: 5},
    maxpassword: {type: Number, required : true, default: 20},
        minname: {type: Number, required : true, default: 3},
        maxname: {type: Number, required : true, default: 20},
       maxnotes: {type: Number, required : true, default: 2000},
   newusertoken: {type: Number, required : true, default: 1}, //default 1 hr 
      usertoken: {type: Number, required : true, default: 4}, //default 4 hours
     admintoken: {type: Number, required : true, default: 4},
       smtphost: {type: String, required : true, default: "localhost"},
     smtpsendas: {type: String, required : true, default: "MyAppSender@myapp.com"},
     smtpsentto: {type: String, required : true, default: "somebody@somewhere.com"}
});

const Settings = mongoose.model('adminsetting', adminSettingsSchema);

exports.Settings = Settings;



