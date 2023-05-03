const router = require('express').Router();
const Course= require('../controller/CourseController')
//router.use(express.json());
router.get('/allcourse',Course.allCourses);
//router.get('/:cid',Course.singleCourseId);
router.get('/:cname',Course.singleCourseName);
router.post('/',Course.createCourse);
router.post('/delete',Course.deleteCourse);
router.post('/update',Course.updateCourse);

// function verifyToken(req,res,next){
//     const bearerHeader =req.headers["authorization"];
//     if(typeof bearerHeader !="undefined"){
//         const bearer= bearerHeader.split(" ");
//         const token=bearer[1];
//         req.token = token;
//         next();
//     }
//     else{
//         res.send({msg:"token is not valid"});
//     }
// }

module.exports = router;