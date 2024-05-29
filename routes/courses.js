const express = require('express');
const router = express.Router();
router.use(express.json());
const Joi = require('joi');
const mongoose = require('mongoose');

const auth = require('../middleware/auth');
const config = require('config');
const {Course} = require('../models/course');




router.get('/', async  (req, res) =>{
	// console.log("courses get requests");

	const courses = await Course.find().sort({"name" :  1});
     res.status(200).send(courses);

});

router.get('/:id', async  (req, res) =>{
	console.log("courses get specific Course");
	 console.log(req.params.id);

	const course = await Course.findById( req.params.id);
     res.status(200).send(course);

});


router.post('/',  async  (req, res) =>{
   
   const c = await Course.findOne({url: req.body.url});
  // console.log("finding course by url : " + c);
     if(c)  {return res.status(400).send({message : "Website already exists"});  }

     const course = new Course(req.body);

	 await course.save().then( x => {
	   console.log("saving new course. saved value is " + x);
	   return res.status(200).send({message : "Posted", course: x});
	 } ).catch(err=> {
	   console.log("Updating course error: " + err);
	   return res.status(404).send({message : "Unable to Update Course, see Support"})
	   });
     
	 
});

router.put('/:id', async  (req, res) =>{
	console.log("update Course");
	

	//let course = await Course.findById( req.params.id);
	const doc = await Course.findOneAndUpdate({_id : req.params.id}
	    , {$set: { name : req.body.name,
     	 	 address : req.body.address,
   	 	 url : req.body.url,
	 	 city : req.body.city,
	 	 country : req.body.country,
	 	 description : req.body.description,
	 	 active : req.body.active,
	 	 coursenames : req.body.coursenames,
	 	 teecolors : req.body.teecolors}
	      }
	     , {new : true} ).catch(err => { 
	     console.log("error on save " + err);
	     return res.status(404).send({message : "Unable to Update Course, see Support"})
	     });
	// console.log(" checking to see if I get a doc returned " + doc);     
         return res.status(200).send({message : "Updated", course : doc});
//	}
	
	 if(!course) return res.status(404).send({message: "Course not found"});
	
	console.log("Course update: " + courseUpdate);
	
   if(courseUpdate) {   
        return res.status(200).send({message : "Course Successfully Updated"});
    } else {
        return res.status(404).send({message : "Unable to Update Course, see Support"});
    }

});


router.delete('/:id', async  (req, res) =>{
	console.log("delete Course");
	 console.log(req.params.id);

	//const deleteResult = await Course.findOneAndDelete({ _id: req.params.id});
     //res.status(200).send("deleted");
	 
	 	 await Course.findOneAndDelete({ _id: req.params.id} , (err , result) => {
			 
		 if(err) {
			 console.log("Error found: ");
			 return res.status(404).send({message : "Unable to delete course"});
		 } 
		 else {
			 console.log("successfully deleted the course" );
			  return res.status(200).send({message : "Course Successfully Deleted"});
		 }
	 });


});

//  Posting or updating Tee location.  Requires a course id and will send "new" for a new teeid otherwise it sends the teeid.

router.put('/:id/:teeid', async  (req, res) =>{


	let course = await Course.findById(req.params.id);
	let courseid=0;
	let tee	= req.params.teeid;
	let payload = req.body;
	
	
	if(!course) return res.status(404).send({message: "Course not found"});
	console.log("before if new ");
	if(tee == "new")  {
	  console.log("in New tee ");
	
	for(var i=0;i<course.tees.length;i++) {
	   if (course.tees[i].coursename == req.body.coursename && course.tees[i].gender == req.body.gender && course.tees[i].teebox == req.body.teebox) {
	      return res.status(404).send({message : "Coursename, Tee and Gender already exist"});
	   }
	}
	//console.log("current course id:  " + JSON.stringify(payload));
	// payload.courseid = course._id;
	// course.tees.push(payload);
	 
	 course.tees.push(payload);
	 console.log("just before save");
	 const courseUpdate= await course.save().then( x => {
	     return res.status(200).send({message : " New Course Successfully Updated", course : x }); 
	 }).catch(err=> {
	   console.log(" error on new save  " + err);
	   return res.status(404).send({message : "Unable to Update Course, see Support"})
	   });
	  
	
	

	} else {
	//console.log("wtf");
	//console.log("payload received:  " +JSON.stringify( payload));
	payload._id = tee;
	
	console.log("course id:  " + req.params.id + "    tee  " + tee );
	const doc = await Course.findOneAndUpdate({_id : req.params.id}
		    ,  {$set: {"tees.$[x]": payload}}
		    , {
		    	arrayFilters: [{"x._id":tee}], new : true,
		      } 
		   ).catch(err => { return res.status(404).send({message : "Unable to Update Course, see Support"})	});
	 //console.log("doc after findoneandupdate  " + doc);
	 //console.log("doc returned after successful update. ");
         return res.status(200).send({message : "Updated", course : doc});
	}
	
//	if(course) {   
//           return res.status(200).send({message : "Course Successfully Updated" });
//        } else {
//           return res.status(404).send({message : "Unable to Update Course, see Support"});
//        }



});





module.exports = router;
