const express = require('express');
const router = express.Router();
router.use(express.json());
const Joi = require('joi');
const mongoose = require('mongoose');

const auth = require('../middleware/auth');
const config = require('config');
const {Course} = require('../models/course');




router.get('/', async  (req, res) =>{
	console.log("courses get requests");

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
   console.log("finding course by url : " + c);
     if(c)  {return res.status(400).send({message : "Website already exists"});  }

     const course = new Course(req.body);
	console.log("after new course");
	 console.log(course);
	 await course.save();
     
	 return res.status(200).send({message : "Posted"});
});

router.put('/:id', async  (req, res) =>{
	console.log("update Course");
	

	let course = await Course.findById( req.params.id);
	 if(!course) return res.status(404).send({message: "Course not found"});
	 
	 course.name = req.body.name;
     course.address = req.body.address;
     course.url = req.body.url;
	 course.city = req.body.city;
	 course.description = req.body.description;
	 course.active = req.body.active;

	const courseUpdate = await course.save();
	
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



module.exports = router;