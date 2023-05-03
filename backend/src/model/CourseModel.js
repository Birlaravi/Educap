var mongoose=require('mongoose');

var CourseSchema = new mongoose.Schema({
    CourseName: {type:String,require:true},
    Duration:{type:Number,require:true},
    CourseStatus:{type:String,require:true}
});

module.exports = mongoose.model(
	'course', CourseSchema, 'Courses');
