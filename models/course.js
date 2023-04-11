
const express = require('express');

const mongoose = require('mongoose');

const config = require('config');

const fs = require('fs');


const teeSchema = new mongoose.Schema({
        courseid   : {type: String, required : false},
	coursename : {type: String, required : true},
	teebox     : {type: String, required : true},
	gender     : {type: String, required : true},
	holes18    : {type: Boolean},
	slope	   : {type: Number, required : true},
	rating     : {type: Number, required : true},
	teeactive   : {type: Boolean},
	par : {type: Array},
	yard: {type: Array},
	hdcp: {type: Array},
	front9p     : {type: Number},
	back9p     : {type: Number},
	totalp     : {type: Number},
	front9y     : {type: Number},
	back9y    : {type: Number},
	totaly     : {type: Number},	
	p1 : {type: Number, min :3, max: 9, required : true},
	p2 : {type: Number, min :3, max: 9, required : true},
	p3 : {type: Number, min :3, max: 9, required : true},
	p4 : {type: Number, min :3, max: 9, required : true},
	p5 : {type: Number, min :3, max: 9, required : true},
	p6 : {type: Number, min :3, max: 9, required : true},
	p7 : {type: Number, min :3, max: 9, required : true},
	p8 : {type: Number, min :3, max: 9, required : true},
	p9 : {type: Number, min :3, max: 9, required : true},
	p10 : {type: Number, min :3, max: 9},
	p11 : {type: Number, min :3, max: 9},
	p12 : {type: Number, min :3, max: 9},
	p13 : {type: Number, min :3, max: 9},
	p14 : {type: Number, min :3, max: 9},
	p15 : {type: Number, min :3, max: 9},
	p16 : {type: Number, min :3, max: 9},
	p17 : {type: Number, min :3, max: 9},
	p18 : {type: Number, min :3, max: 9},
	yd1 : {type: Number, required : true},
	yd2 : {type: Number, required : true},
	yd3 : {type: Number, required : true},
	yd4 : {type: Number, required : true},
	yd5 : {type: Number, required : true},
	yd6 : {type: Number, required : true},
	yd7 : {type: Number, required : true},
	yd8 : {type: Number, required : true},
	yd9 : {type: Number, required : true},
	yd10 : {type: Number},
	yd11 : {type: Number},
	yd12 : {type: Number},
	yd13 : {type: Number},
	yd14 : {type: Number},
	yd15 : {type: Number},
	yd16 : {type: Number},
	yd17 : {type: Number},
	yd18 : {type: Number},
	h1 : {type: Number, min :1, max: 18, required : true},
	h2 : {type: Number, min :1, max: 18, required : true},
	h3 : {type: Number, min :1, max: 18, required : true},
	h4 : {type: Number, min :1, max: 18, required : true},
	h5 : {type: Number, min :1, max: 18, required : true},
	h6 : {type: Number, min :1, max: 18, required : true},
	h7 : {type: Number, min :1, max: 18, required : true},
	h8 : {type: Number, min :1, max: 18, required : true},
	h9 : {type: Number, min :1, max: 18, required : true},
	h10 : {type: Number, min :1, max: 18},
	h11 : {type: Number, min :1, max: 18},
	h12 : {type: Number, min :1, max: 18},
	h13 : {type: Number, min :1, max: 18},
	h14 : {type: Number, min :1, max: 18},
	h15 : {type: Number, min :1, max: 18},
	h16 : {type: Number, min :1, max: 18},
	h17 : {type: Number, min :1, max: 18},
	h18 : {type: Number, min :1, max: 18}
});



const courseSchema = new mongoose.Schema({

    name : {type: String, required : true, minlength: 2, maxlength: 100},  
    address : {type: String, maxlength: 100},
    url : {type: String},
    city: {type: String, required : true, maxlength: 50},
    country: {type: String, required: true},
    createDate : {type : Date, default : Date.now},
    description : {type: String,  maxlength: 1000},  
    active : {type: Boolean, default: true},
    deleted : {type: Boolean, default: false},
    coursenames: { type: [String]},
    teecolors : { type: [String]},
    tees : [teeSchema]
    
});


const Course= mongoose.model('course', courseSchema);




exports.Course = Course;

