
const express = require('express');
//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const config = require('config');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const  {rdSettings} = require('../admin/filesettings');


const buddySchema = new mongoose.Schema({

    name : {type: String, required : true},  
    email : {type: String, require: true},
    createDate : {type : Date, default : Date.now},
    gender: {type: String, required : true, default: "Unknown"},
    allowedToPost : {type: Array},
    ICanPost : {type: Array},
    requests: {type: Array}

});

const Buddy = mongoose.model('buddy', buddySchema);

exports.Buddy = Buddy;