
const express = require('express');

const mongoose = require('mongoose');

const config = require('config');

const fs = require('fs');

// add requred true to runninghandicap and dayindex exceptional( can be 0,1 or 2)


const srSchema = new mongoose.Schema ({
    h : {type: Number},
    r : {type:String }
});

const scorehandicapSchema = new mongoose.Schema({
   handicap : {type: Number, required : true},
   handicapIndex : {type: Number},
   lhiIndex: {type: Number},
   exception : {type:Number},
   date : {type: Date, required : true},
   dayIndex : {type: Number},
   rn : {type: Number}
});

const scoredetailSchema = new mongoose.Schema({

    courseid: {type: String, required : true},
    teeid : {type: String, required : true},
 //   detailLevel: {type: String},
    name : {type: String, required : false},
    coursename : {type: String, required : true},
    scoredetail : {type:String},  // add required true once testing done
    teename : {type: String, required : true},
    holesplayed : {type: String},
    username : {type: String, required : true},
    partotalcourse : {type: String, required : true},
    slope : {type: String, required : true},
    rating : {type: String, required : true},
    comment :{type: String},
    date : {type: Date, required : true},
    rn : {type: String},
    year : {type: Number},
    s1 : {type: Number},
    s2 : {type: Number},
    s3 : {type: Number},
    s4 : {type: Number },
    s5 : {type: Number },
    s6 : {type: Number },
    s7 : {type: Number },
    s8 : {type: Number },
    s9 : {type: Number },
    s10 : {type: Number },
    s11 : {type: Number },
    s12 : {type: Number },
    s13 : {type: Number },
    s14 : {type: Number },
    s15 : {type: Number },
    s16 : {type: Number },
    s17 : {type: Number },
    s18 : {type: Number },
    f1 : {type: String },
    f2 : {type: String },
    f3 : {type: String },
    f4 : {type: String },
    f5 : {type: String },
    f6 : {type: String },
    f7 : {type: String },
    f8 : {type: String },
    f9 : {type: String },
    f10 : {type: String },
    f11 : {type: String },
    f12 : {type: String },
    f13 : {type: String },
    f14 : {type: String },
    f15 : {type: String },
    f16 : {type: String },
    f17 : {type: String },
    f18 : {type: String },
    g1 : {type: String },
    g2 : {type: String },
    g3 : {type: String },
    g4 : {type: String },
    g5 : {type: String },
    g6 : {type: String },
    g7 : {type: String },
    g8 : {type: String },
    g9 : {type: String },
    g10 : {type: String },
    g11 : {type: String },
    g12 : {type: String },
    g13 : {type: String },
    g14 : {type: String },
    g15 : {type: String },
    g16 : {type: String },
    g17 : {type: String },
    g18 : {type: String },
    p1 : {type: Number },
    p2 : {type: Number },
    p3 : {type: Number },
    p4 : {type: Number },
    p5 : {type: Number },
    p6 : {type: Number },
    p7 : {type: Number },
    p8 : {type: Number },
    p9 : {type: Number },
    p10 : {type: Number },
    p11 : {type: Number },
    p12 : {type: Number },
    p13 : {type: Number },
    p14 : {type: Number },
    p15 : {type: Number },
    p16 : {type: Number },
    p17 : {type: Number },
    p18 : {type: Number },
    pen1 : {type: Number },
    pen2 : {type: Number },
    pen3 : {type: Number },
    pen4 : {type: Number },
    pen5 : {type: Number },
    pen6 : {type: Number },
    pen7 : {type: Number },
    pen8 : {type: Number },
    pen9 : {type: Number },
    pen10 : {type: Number },
    pen11 : {type: Number },
    pen12 : {type: Number },
    pen13 : {type: Number },
    pen14 : {type: Number },
    pen15 : {type: Number },
    pen16 : {type: Number },
    pen17 : {type: Number },
    pen18 : {type: Number },
    f9tot : {type: Number},
    b9tot : {type: Number},
    gtotal : {type: Number, required : true},
    ntotal : {type: Number, required : true},
    g_topar : {type: Number, required : true},
    handicap : {type: Number, required : true},
    gir : {type: Number}, 
    fairways : {type: Number },
    fy: {type: Number },
    fl2: {type: Number },
    fl1: {type: Number },
    fr1: {type: Number },
    fr2: {type: Number },
    fw: {type: Number },
    fs: {type: Number },                    
    putts : {type: Number },
    zeroputts : {type: Number },
    oneputts : {type: Number },
    twoputts : {type: Number },
    threeputtsplus: {type: Number },
    penaltytotal : {type: Number },
    albatotal : {type: Number },
    eagletotal : {type: Number },
    birdietotal : {type: Number },
    partotal : {type: Number },
    bogeytotal : {type: Number },
    doubletotal : {type: Number },
    tripleplustotal : {type: Number }
    
    
});

const scoreSchema = new mongoose.Schema({

    userid : { type:String, required : true},
    handicap : {type:String },
    lowhandicap : {type: String},
    username: {type: String},
    homecourse: {type:String },
    scores : [scoredetailSchema],
    handicapArray :[scorehandicapSchema],
    lowScoresArray :[srSchema]

});


const Score= mongoose.model('score', scoreSchema);




exports.Score = Score;

