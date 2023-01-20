
const express = require('express');

const mongoose = require('mongoose');

const config = require('config');

const fs = require('fs');


const teeSchema = new mongoose.Schema({
	teeName : {type: String, required : true},
	par1 : {type: Number, min :3, max: 7},
	par2 : {type: Number, min :3, max: 7},
	par3 : {type: Number, min :3, max: 7},
	yd1 : {type: Number},
	yd2 : {type: Number},
	yd3 : {type: Number}
});



const courseSchema = new mongoose.Schema({

    name : {type: String, required : true, minlength: 2, maxlength: 100},  
    address : {type: String, maxlength: 100},
	url : {type: String},
    city: {type: String, required : true, maxlength: 50},
    createDate : {type : Date, default : Date.now},
	description : {type: String,  maxlength: 1000},  
	active : {type: Boolean, default: true},
	deleted : {type: Boolean, default: false},
	tees : [teeSchema]
    
});


const Course= mongoose.model('course', courseSchema);




exports.Course = Course;

