var mongoose=require('mongoose');

var CareerSchema = new mongoose.Schema({
   JobTitle:{type:String,require:true},
   JobType:{type:String,require:true},
   Qualification:{type:String,require:true},
   JobDescription:{type:String,require:true},
   JobStatus:{type:String,require:true}
});

module.exports = mongoose.model(
	'career', CareerSchema, 'Careers');
