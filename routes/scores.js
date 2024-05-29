const express = require('express');
const router = express.Router();
router.use(express.json());
const Joi = require('joi');
const mongoose = require('mongoose');

const auth = require('../middleware/auth');
const config = require('config');
const {Score} = require('../models/score');

const {Course} = require('../models/course');


var fs =  require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

//console.log = function(d) {
 //  log_file.write(util.format(d) + '\n');
  // log_stdout.write(util.format(d) + '\n');
//};




router.get('/:id', async  (req, res) =>{
	//console.log("in scores get id");
	// console.log("in scores router, get by id: " + req.params.id);

	const score = await Score.findOne({userid: req.params.id});
	//console.log(JSON.stringify(score.handicap + score.scores.length));
  
	if(score) return res.status(200).send({message : "ok", scores: score});
	else return res.status(200).send({message : "ok", scores: "new"});
    

});


router.post('/:id',  async  (req, res) =>{
     //console.log("finding score user by id : ");
     const roundIndex = [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,7,8]; // counting rounds based on rounds played
     const counters = "";
     const score = await Score.findOne({userid: req.params.id});
     
     
     if(score)  {

       score.scores.push(req.body);
       
       let jj = new Date(req.body.date);
       let mm = jj.getMonth();
       let yy = jj.getFullYear();
       let dd = jj.getDate();
       let tempArray = [];
       let insertPoint = 0;
      // console.log("body push date " + jj);
       
 //  testing for multiple single day entries
       
       let index = 0;
       for(let i=0;i<score.handicapArray.length;i++) {
         let kk = new Date(score.handicapArray[i].date);
         let mmm = kk.getMonth();
         let yyy = kk.getFullYear();
         let ddd = kk.getDate();
         
         if(mm == mmm && yy==yyy && dd == ddd) { 
        // console.log("date compare equals");
            if(score.handicapArray[i].dayIndex >= index) {
               index = score.handicapArray[i].dayIndex +1;
             //  console.log("index for dayindex " + index);
            }
          }
         if(!insertPoint && (jj < kk)) {
          insertPoint = i;
        //  console.log("Insert Point: " + insertPoint + " the Date in hcArray: " + kk );
       //   console.log("Entries in handicapArray: " + score.handicapArray.length);
        }
         
         
       }
       if(!insertPoint) {
         insertPoint = score.handicapArray.length - 1;
       //  ///console.log(" InsertPoint last entry: " + insertPoint);
       }
       
       // +++++ just added the exception above
       
       // handicap is the handicap for the round. date is date, dayIndex is a number used to sort if there are multiple rounds in day
       // handicapIndex is the handicapIndex history(recalc'ed every posting... preferably only from posted date of round. 
       // and exception is eith 0,1, or 2 based on diff between handicap and previous round handicapIndex 7-9.9 is 1, 10+ is 2
       
       score.handicapArray.push({handicap: req.body.handicap , date : req.body.date, dayIndex : index, handicapIndex: 0, lhiIndex:0, exception : 0, rn : req.body.rn});
       //console.log("what should be pushed into  ha " + JSON.stringify(score.handicapArray[score.handicapArray.length -1]));
       tempArray = calcHI(score.handicapArray);
       //printArray(tempArray ); //correct
       // +++ tempArray is a sorted array by date
       //console.log(JSON.stringify(tempArray));
       score.handicapArray = calcHIndex(tempArray);
       console.log("whats posted from calcHIndex");
       printArray( score.handicapArray ); // correct
      //  console.log("before counters assignment" + tempArray.lowScores);
      // counters = score.handicapArray.lowScores;
      //  console.log("after counters assignment, before delete");
      //  delete score.handicapArray.lowScores;
      //  console.log("after delete");
      //  console.log("value of counters " + counters);
       


       score.handicap = score.handicapArray[score.handicapArray.length -1].handicapIndex;
       let low = 0;
       let lowScores=[];
       
      if(score.handicapArray.length < 20) {low = 0}
      
      else {low = score.handicapArray.length - 20}
      console.log("after low value" + low);
      for(i=score.handicapArray.length-1;i>=low ;i--) {
        lowScores.push({h : score.handicapArray[i].handicap, r : score.handicapArray[i].rn })

      }
      console.log("Items in array:  "  + lowScores.length);
      lowScores = simple2(lowScores);
      let v = lowScores.length;
      //console.log("value of v " + v + "  index value of v " + roundIndex[v]);
      lowScores.splice(roundIndex[v-1]);
      console.log("lowScores after splice " + JSON.stringify(lowScores));
       //put scoring round function here and save to root of score.
       score.lowScoresArray = lowScores;
       score.username = req.body.username;
       insertPoint = 0;
        
       await score.save().then(x=> {
     	//console.log("handicap array " + JSON.stringify(score.handicapArray));
      
     	return res.status(200).send({message: "Score Saved", posted: true});
      }).catch(err => {
      	console.log("error saving score posting" + err);
      	return res.status(404).send({message: "Unable to save score", posted: false});
      });
    }  
  //  Score not found first time entry below   
     else {
     
     const score = new Score();
   //  score._id = req.params.id;
     score.userid = req.params.id;
     score.scores = req.body;
     score.handicap = req.body.handicap;
     score.username = req.body.username;
     score.handicapArray = {handicap: req.body.handicap , date : req.body.date,dayIndex : 0, handicapIndex : req.body.handicap, lhiIndex:0, exception : 0, rn : req.body.rn};
     //console.log(JSON.stringify(score));
     
     await score.save().then(x=> {
     	console.log("saving new score posting");
     	return res.status(200).send({message: "Score Saved", posted: true});
      }).catch(err => {
      	console.log("error saving score posting" + err);
      	return res.status(404).send({message: "Unable to save score", posted: false});
      });
     
     }
 });

    
function calcHI(ha) {
    //console.log(ha.length);
    // sort the array 
    //console.log(JSON.stringify(ha));
   let hasorted = ha.sort((a, b)=> {
    if (a.date === b.date) {
      return a.dayIndex < b.dayIndex ? -1 : 1
    } else {
      return a.date < b.date ? -1 : 1
    }
  })
     return hasorted;
}

function simple(x) {
  x= x.sort(function(a,b){return a.handicap - b.handicap});
  return x;
}

function dateSort(x) {
  x= x.sort(function(a,b){return a.date - b.date});
  return x;
}

function simple2(x) {
  x= x.sort(function(a,b){return a.h - b.h});
  return x;
}

function ss(x) {
  x= x.sort(function(a,b){return a.h - b.h});
  return x;
}

function getExcept(xx) {
//  console.log(" number passed in " + parseInt(xx));
  let yy = 0;
  if(xx >= 10) {yy = 2}
  else if(xx < 10 && xx > 7) {yy=1}
  else {yy = 0}
  //console.log("checking exception number " + yy + " number passed in " + xx);
  return yy;
}

function getLowScores(xxx) {
   let max = 0;
   if(xxx.length > 20) {max = parseInt(xxx.length) - 20}
   let re = 0;  // is running exception total
   let yy = [];
  // for(let j=max;j < xxx.length;j++) {
    for(let j=xxx.length-1;j >= max;j--) {
      re+= xxx[j].exception;  
      yy.push({h : xxx[j].handicap - re, r : xxx[j].rn});
   }
  // if(xxx.length > 19) {console.log( "the array of number after exception applied "+ yy);}
  console.table(yy);
  return yy;
         

}

function printArray(x ) {
  for(let i=0;i<x.length;i++) {
    console.log("HDCP: " + x[i].handicap +  " date: " +  x[i].date + " dayIndex: " + x[i].dayIndex + " hIndex: " + x[i].handicapIndex);
  }
}
// beginning of calcHIIndex ====================

function calcHIndex(ta) {
  // ta should be a sorted array oldest to newest
  // will be at least 1 object ie: posted score.  Not guaranteed to be the latest score.
  
  //handicap : {type: Number, required : true},
  // runninghandicap : {type: Number},
  // exception : {type:Number},
  // date : {type: Date, required : true},
  // dayIndex : {type: Number}
  
  let tempA = [];
  const lhiTimeGap = 1000 * 3600 * 24 * 365;  // use 3 days for testing purposes... change to 365 for full year.
  //handicap is the scoring handicap for round, runninghandicap is your handicap on the given day.
  // loop outer ta
  //  inner loop, loop thru tempA 
  //  oldest 2, exception is 0, handicap is handicap, runninghandicap is handicap
  //  3rd start comparing handicap all 3 scores and get lowest 1  and subtract 2
  
  
  // this for loop is for calculating handicap.  look at first item in temp and see what the current hc is. Compare to current iterations handicap to tempA[0].handicap value.
  // determine if an exception is required.  save exception value to x and push onto tempA.  TempA should be ordered high to low. 
  // could figure out when the last score fits in the handicap array and reset i in below for loop to point handicapArray.  save compute time.

  let z;
  for(let i=0; i <ta.length; i++) {

   // console.log("value of i " + i);
 
    let except = 0;
    let x = 0;
    
    let y =[]; 
    let arr = [];

    if(i > 1 ) {
      x= parseInt(tempA[i-1].handicapIndex) - parseInt(ta[i].handicap);
      except = getExcept(x);

    }

    if(i > 1 && i < 19) {
       tempA.push({date: ta[i].date, handicap: ta[i].handicap, exception : except, handicapIndex : 0, lhiIndex:54, dayIndex : ta[i].dayIndex ,rn : ta[i].rn });
       console.log("is this doing anything");
    }

// insert if here and wrap around switch statement.  Simply push entries into tempA

     switch (i + 1) {
       case 1:
       case 2:
            tempA.push({date: ta[i].date, handicap: ta[i].handicap, exception : 0, handicapIndex : ta[i].handicap, lhiIndex:54, dayIndex : ta[i].dayIndex ,rn : ta[i].rn });
       break;
       case 3: 
           z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = z[0].h - 2;
       break;
       case 4:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = z[0].h - 1;
       break;
       case 5:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = z[0].h;
       break;
       case 6:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h) / 2 -1;
       break;
       case 7:
       case 8:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h) / 2 ;
       break;
       case 9:
       case 10:
       case 11:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h+z[2].h) / 3;
       break;
       case 12:
       case 13:
       case 14:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h+z[2].h+z[3].h) / 4 ;
       break;
       case 15:
       case 16:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h+z[2].h+z[3].h+z[4].h) / 5 ;
       //  console.log(JSON.stringify(z));
       break;
       case 17:
       case 18:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h+z[2].h+z[3].h+z[4].h+z[5].h) / 6 ;
       break;
       case 19:
         z = ss(getLowScores(tempA));
         tempA[i].handicapIndex = (z[0].h+z[1].h+z[2].h+z[3].h+z[4].h+z[5].h+z[6].h) / 7 ;
       break;
       default:

      // this block strictly for calculating LHI 
      //  start LHI 
       let ind = i-1;
       let counter ;

       if(i==19) {counter = 0}
       else counter = i - 20; 
       let lhiArr = [];
       //console.log("Ind: " + ind);
       
       let cd = new Date(tempA[ind].date);    // these are previous iterations, new values not pushed yet
       
      // console.log(" value of ind " + ind  +  "   value of counter  " + counter);
      // while(ind >= counter) {   
       while(ind >= 0) {  
      
       let prev = new Date(tempA[ind].date);
       
      // let ccdd = cd.getTime() - lhiTimeGap;
      // console.log("value of ind: " + ind + " cd: " + cd + " prev: " + prev); 
         if(((cd.getTime() - lhiTimeGap) -prev.getTime()) < 0) {
     // console.log(" pushing in values if within 365 days. number used to calc LHI. Uses ind to get prev 19  " + tempA[ind].handicapIndex);
           lhiArr.push(tempA[ind].handicapIndex);
           
         }
        // else break;
         
       ind --;
       }
       //console.log("  lhiArr values... collects all handicap indexes for 1 year time frame  "  + JSON.stringify(lhiArr));
       //  x= tempA[i-1].handicapIndex - ta[i].handicap;
         
      // 	 except = getExcept(x);
       	 
       //	console.log( "  exceptions being calculated....handicap of score compared to previous HI: " + except); 
       	 
       	 let templhi=null; 
       	 
       	 if(lhiArr.length) {
       //	 console.log("lhrArr has length: " + lhiArr.length);
       	 templhi = Math.min.apply(null, lhiArr)
       	 
       	 };
       	 
       	 
       	 tempA.push({date: ta[i].date, handicap: ta[i].handicap, exception : except, handicapIndex : 0, lhiIndex: templhi, dayIndex : ta[i].dayIndex ,rn : ta[i].rn });
         z = ss(getLowScores(tempA));
         let temphandicap = (z[0].h+z[1].h+z[2].h+z[3].h+z[4].h+z[5].h+z[6].h+z[7].h) / 8 ;
         // once soft and hard cap figured out, formula below has to change.
        // console.log("  all 20 counting handicap scores :  " + JSON.stringify(z));
        // console.log("  should be 8 lowest scores sorted low to high " + z[0] + " " + z[1] + " " +z[2] + " " + z[3] + " " + z[4] + " " + z[5] + " " +z[6] + " " + z[7]);
        // console.log("  after running throuhg getLowScores which builds 20 prev scores then sorted through ss, handicap after posted round   " + temphandicap); 
         
         let temphdiff;
         if(templhi) {temphdiff = temphandicap - templhi}
         else {temphdiff = 0}
         if(temphdiff > 5) {
          // console.log("hard cap occurred because handicap for this round exceed 5 better than lhi: " + temphdiff);
           tempA[i].handicapIndex = templhi + 5; 
         }
         else if (temphdiff < 5 && temphdiff > 3) {
          // console.log("soft cap occurred. temphdiff is : " + temphdiff);
          //
           tempA[i].handicapIndex = templhi + (((temphdiff - 3) / 2) + 3); 
         }
         else tempA[i].handicapIndex = temphandicap ;
         
         if(tempA[i].handicapIndex < tempA[i].lhiIndex) {tempA[i].lhiIndex = tempA[i].handicapIndex  }
        
     }
    // if(i+1==ta.length) {
      
    //  tempA.lowScores = JSON.stringify(z);
    //  //console.log("afer push of z into lowScores:  " + tempA.lowScores);      
    // }
  }
  
  return tempA;
}
	 
// End of calcHIIndex===========================

module.exports = router;
