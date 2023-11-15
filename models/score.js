
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
    detailLevel: {type: String},
    name : {type: String, required : false},
    coursename : {type: String, required : true},
    scoredetail : {type:String},  // add required true once testing done
    teename : {type: String, required : true},
    username : {type: String, required : true},
    partotalcourse : {type: String, required : true},
    slope : {type: String, required : true},
    rating : {type: String, required : true},
    comment :{type: String},
    date : {type: Date, required : true},
    rn : {type: String},
    year : {type: Number, required : true},
    s1 : {type: Number, required : true},
    s2 : {type: Number, required : true},
    s3 : {type: Number, required : true},
    s4 : {type: Number, required : true},
    s5 : {type: Number, required : true},
    s6 : {type: Number, required : true},
    s7 : {type: Number, required : true},
    s8 : {type: Number, required : true},
    s9 : {type: Number, required : true},
    s10 : {type: Number, required : true},
    s11 : {type: Number, required : true},
    s12 : {type: Number, required : true},
    s13 : {type: Number, required : true},
    s14 : {type: Number, required : true},
    s15 : {type: Number, required : true},
    s16 : {type: Number, required : true},
    s17 : {type: Number, required : true},
    s18 : {type: Number, required : true},
    f1 : {type: String, required : true},
    f2 : {type: String, required : true},
    f3 : {type: String, required : true},
    f4 : {type: String, required : true},
    f5 : {type: String, required : true},
    f6 : {type: String, required : true},
    f7 : {type: String, required : true},
    f8 : {type: String, required : true},
    f9 : {type: String, required : true},
    f10 : {type: String, required : true},
    f11 : {type: String, required : true},
    f12 : {type: String, required : true},
    f13 : {type: String, required : true},
    f14 : {type: String, required : true},
    f15 : {type: String, required : true},
    f16 : {type: String, required : true},
    f17 : {type: String, required : true},
    f18 : {type: String, required : true},
    g1 : {type: String, required : true},
    g2 : {type: String, required : true},
    g3 : {type: String, required : true},
    g4 : {type: String, required : true},
    g5 : {type: String, required : true},
    g6 : {type: String, required : true},
    g7 : {type: String, required : true},
    g8 : {type: String, required : true},
    g9 : {type: String, required : true},
    g10 : {type: String, required : true},
    g11 : {type: String, required : true},
    g12 : {type: String, required : true},
    g13 : {type: String, required : true},
    g14 : {type: String, required : true},
    g15 : {type: String, required : true},
    g16 : {type: String, required : true},
    g17 : {type: String, required : true},
    g18 : {type: String, required : true},
    p1 : {type: Number, required : true},
    p2 : {type: Number, required : true},
    p3 : {type: Number, required : true},
    p4 : {type: Number, required : true},
    p5 : {type: Number, required : true},
    p6 : {type: Number, required : true},
    p7 : {type: Number, required : true},
    p8 : {type: Number, required : true},
    p9 : {type: Number, required : true},
    p10 : {type: Number, required : true},
    p11 : {type: Number, required : true},
    p12 : {type: Number, required : true},
    p13 : {type: Number, required : true},
    p14 : {type: Number, required : true},
    p15 : {type: Number, required : true},
    p16 : {type: Number, required : true},
    p17 : {type: Number, required : true},
    p18 : {type: Number, required : true},
    pen1 : {type: Number, required : true},
    pen2 : {type: Number, required : true},
    pen3 : {type: Number, required : true},
    pen4 : {type: Number, required : true},
    pen5 : {type: Number, required : true},
    pen6 : {type: Number, required : true},
    pen7 : {type: Number, required : true},
    pen8 : {type: Number, required : true},
    pen9 : {type: Number, required : true},
    pen10 : {type: Number, required : true},
    pen11 : {type: Number, required : true},
    pen12 : {type: Number, required : true},
    pen13 : {type: Number, required : true},
    pen14 : {type: Number, required : true},
    pen15 : {type: Number, required : true},
    pen16 : {type: Number, required : true},
    pen17 : {type: Number, required : true},
    pen18 : {type: Number, required : true},
    f9tot : {type: Number, required : true},
    b9tot : {type: Number, required : true},
    gtotal : {type: Number, required : true},
    ntotal : {type: Number, required : true},
    g_topar : {type: Number, required : true},
    handicap : {type: Number, required : true},
    gir : {type: Number, required : true}, 
    fairways : {type: Number, required : true},
    fy: {type: Number, required : true},
    fl2: {type: Number, required : true},
    fl1: {type: Number, required : true},
    fr1: {type: Number, required : true},
    fr2: {type: Number, required : true},
    fw: {type: Number, required : true},
    fs: {type: Number, required : true},                    
    putts : {type: Number, required : true},
    zeroputts : {type: Number, required : true},
    oneputts : {type: Number, required : true},
    twoputts : {type: Number, required : true},
    threeputtsplus: {type: Number, required : true},
    penaltytotal : {type: Number, required : true},
    albatotal : {type: Number, required : true},
    eagletotal : {type: Number, required : true},
    birdietotal : {type: Number, required : true},
    partotal : {type: Number, required : true},
    bogeytotal : {type: Number, required : true},
    doubletotal : {type: Number, required : true},
    tripleplustotal : {type: Number, required : true}
    
    
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

