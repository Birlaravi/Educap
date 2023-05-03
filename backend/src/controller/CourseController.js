const Course = require("../model/CourseModel");
const jwt = require("jsonwebtoken");
const allCourses = async (req, res) => {
  try {
    const courseData = await Course.find();
    res.status(200).json(courseData);
  } catch (error) {
    res.status(500).send(error);
  }
};
/* 
const singleCourseId=async(req,res)=>{
    const data=req.params.cid;
    try{
       const courseData = await Course.findById(data);
        res.status(200).json(courseData);
    }
    catch(error){
        res.status(500).send(error)
    }
};
*/
const singleCourseName = async (req, res) => {
  const data = req.params.cname;
  try {
    const courseData = await Course.find({ CourseName: data });
    res.status(200).json(courseData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const createCourse = async (req, res) => {
  //const data= req.params.cid;
  try {
    const data = {
      CourseName: req.body.CourseName,
      Duration: req.body.Duration,
      CourseStatus: "active",
    };

    //const result = newCourse({CourseName ,Duration,CourseStatus});
    const result = new Course(data);
    const result1 = result.save();
    res.status(201).json(`RESULT..${result}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseData = await Course.findByIdAndUpdate(req.body._id, {
      CourseStatus: "inactive",
    });
    res.status(200).json(courseData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourse = async (req, res) => {
  try {
    const coursedata = await Course.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json(coursedata);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  allCourses,
  //singleCourseId,
  singleCourseName,
  createCourse,
  deleteCourse,
  updateCourse,
};
