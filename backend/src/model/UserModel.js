const { string } = require('joi');
var mongoose=require('mongoose');

var UserSchema = new mongoose.Schema({
    UserName:{ type: String
    },
    UserEmail:{type:String,require:true},
	UserNumber: {type:String,require:true},
    UserPassword:{type:String,require:true},
    UserDOB:{type:Date,require:true},
    UserStatus:{type:String,require:true},
    UserEnroll:{type:String },
    UserJobApply:{type:String,default:"pending"},
    UserPhoto:{type:String}
});

module.exports = mongoose.model(
	'user', UserSchema, 'Users');
